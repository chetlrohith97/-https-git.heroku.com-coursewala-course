import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name:string;
  lastname:string;
  username:string;
  email:string;
  number:number;
  password:string;
  conformpassword:string
  gender:string;

  constructor(private router:Router,private register:RegisterService) { }

  ngOnInit() 
  {
   
  }
  readData(v)
  {
    this.router.navigate(["home1/login"])
   console.log(v);

   
   this.register.getData(v).subscribe(temp=>{alert(temp)
    if(temp==="registered successfully"){
      this.router.navigate(['/home1/login']);
    }
    if(temp==="user existed ...choose another user name"){
      this.router.navigate(['/home1/registration']);
    }});


   
   this.name='';
   this.lastname='';
   this.username='';
   this.email='';
   this.number;
   this.password='';
   this.conformpassword=''

   

  }
}
