import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import * as jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  name:string;
  password:string;
  expiryDate:number;
  todayDate:number;
  constructor(private router:Router,private login:LoginService) { }

  // ngOnInit() 
  // {
  //   let token=localStorage.getItem("jwt_token")
  //   if(token){
  //     let decoded=jwt_decode(token);
  //     const date= new Date(0);
  //     //convert exp value to seconds
  //     date.setUTCSeconds(decoded.exp);
  //     this.expiryDate =date.getTime();
  //     //convert to day date into seconds
  //     let td=new Date();
  //     this.todayDate=td.getTime();
  //     //decoded exo will give date oner week a head from receiving time of token 
  //     if(this.todayDate>this.expiryDate){
  //       this.logout();
  //       this.router.navigate(['/home1/login']);
  //     }
  //   }

  // }

  
  


readData1(v)
{
if(v.name=="admin"  && v.password=="admin1"){
  this.router.navigate(["admin"]);
  console.log(v);
}
else
{
  this.login.loginData(v);
}
console.log(v);
this.name="";
this.password="";

}
}
