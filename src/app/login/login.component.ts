import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string;
  password:string;
  constructor(private router:Router,private login:LoginService) { }

  ngOnInit() 
  {

  }
  
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
