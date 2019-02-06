var exp=require('express');
var app=exp();
var path=require('path');
var bodyparser=require('body-parser');
var bcrypt=require('bcryptjs');
var mongoose=require('mongoose');

//converting the javascript to json object
app.use(bodyparser.json());
// app.use(bodyparser.urlexncoded({extended:false}));


//connecting server with the  angular app
app.use(exp.static(path.join(__dirname,'dist/project')));

//Get our API routes
const api=require('./server/route/api');

//ser out api route
app.use('/api',api);

//catch all other routers and return the index file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/project/index.html'))
});



//listening to the port number
app.listen(process.env.PORT || 8080,()=>{
    console.log('server listning to port 8080....');
})