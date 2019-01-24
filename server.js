var exp=require('express');
var app=exp();
var path=require('path');
var bodyparser=require('body-parser');
var bcrypt=require('bcryptjs');
var mongoose=require('mongoose');

//converting the javascript to json object
app.use(bodyparser.json());


//connecting server with the  angular app
app.use(exp.static(path.join(__dirname,'dist/project')));


//getting mongodb client object
var mongoclient=require('mongodb').MongoClient;

var dbo;
var pro;

var url='mongodb://rohith:rohith123@ds161144.mlab.com:61144/coursewalla'

//connect with coursewalla
mongoclient.connect(url,(err,client)=>{
    if(err){
        console.log('error in database connection');
    }
    else{
        //get object of coursewalla databased
        dbo=client.db('coursewalla');
        console.log('connected with data base');
    }
})

//assigning the requsted data to registration document of database
app.post('/home1/register',(req,res,next)=>{
    console.log('working');

    //check for user exsitance
    dbo.collection('registration').find({username:req.body.username}).toArray((err,data)=>{
        //if user is not  found then unsert user document
        if(data.length===0){
           bcrypt.hash(req.body.password,10,(err,hashcode)=>{
               if(err){
                   console.log("error in hashcode")
               }
               else{
                   dbo.collection("registration").insertOne({name:req.body.name,
                    lastname:req.body.lastname,
                    username:req.body.username,
                    email:req.body.email,
                    number:req.body.number,
                    password:hashcode,
                   });
                   res.json("registered successfully")
               }
           })
        }
        //if user is existed , send response to client to choose another name
        else{
            res.json({"message":"user existed ...choose another user name"})
        }
    })  
})





//assigning the requested data of login to data base

app.post('/home1/login',(req,res,next)=>{

    pro=req.body.name;
    dbo.collection('registration').find({name:req.body.name}).toArray((err,data)=>{
        if(err){
            console.log("error during connetion")
        }
        else{
            //if password matched then true is assigned to success,else false
            if(data.length===0){
                res.json("user name not matched ")
            }
            else{
            bcrypt.compare(req.body.password,data[0].password,(err,success)=>{
                if(err){
                    console.log(err)
                }
                else if(success==true){
                    res.json("logged in successful")
                }
                else{
                    
                    res.json("wrong password");
                }
            })
        }

        }
    })
})




//sending data form the admin crud to the data base of collection crud
app.post('/admin/crud',(req,res,next)=>{
dbo.collection('crud').insertOne(req.body)
})

//Retriving data form the database to the crud component  of admin
app.get('/admin/crud',(req,res,next)=>{
    dbo.collection('crud').find({}).toArray((err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})


//retriving the data form data base to the subscriber
app.get('/admin/subscriber',(req,res,next)=>{
    dbo.collection('registration').find({}).toArray((err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})



//profile info

app.get('/user/profile',(req,res,next)=>{

    dbo.collection('registration').find({name:pro}).toArray((err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})


//retrving data form the data base to the home1 component of the course item
app.get('/home1',(req,res,next)=>{
    dbo.collection('crud').find({}).toArray((err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(data);
        }
    })
})


//update handler of profile
app.put('/user/profile',(req,res)=>{

    //Object recieved from the client
    console.log(req.body._id);

    //converting string id into objectId
    var objectid=new mongoose.Types.ObjectId(req.body._id);
    console.log(objectid);
    //updating
    dbo.collection('registration').update({_id:objectid},{$set:{name:req.body.name,
                                                    email:req.body.email,
                                                    username:req.body.username,
                                                number:req.body.number}
                                            },(err,success)=>{
                                                if(err){
                                                    console.log(err);
                                                }
                                                else{
                                                    dbo.collection('registration ').find({}).toArray((err,data)=>{
                                                        if(err){
                                                            console.log(err);
                                                        }
                                                        else{
                                                            res.json(data);
                                                        }
                                                    })
                                                }
                                            })
})





//updating the data of crud component and connecting them to the data base with the respective changes in them
app.put('/admin/crud',(req,res)=>{

    //object receved from the client 
    console.log(req.body);

    //converting the stringid into the ObjectId
    console.log(req.body._id);

    var objectidd=new mongoose.Types.ObjectId(req.body._id);
    console.log(objectidd);

    //updating the document into the data base

    dbo.collection('crud').update({_id:objectidd},{$set:{coursename:req.body.coursename,
        coursedetails:req.body.coursedetails,
        courseauthor:req.body.courseauthor,
        authordetails:req.body.authordetails,
        enterprice:req.body.enterprice,
        user:req.body.user}},
        (err,success)=>{
            if(err){
                console.log(err)
            }
            else{
                dbo.collection('crud').find({}).toArray((err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        res.json(data);
                    }
                })
            }
        })
})



//listening to the port number
app.listen(process.env.PORT || 8080,()=>{
    console.log('server listning to port 8080....');
})