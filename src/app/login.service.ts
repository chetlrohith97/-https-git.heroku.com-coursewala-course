import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{Router}from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }
  loginData(v){
    this.http.post('home1/login',v).subscribe(temp=>{alert(temp)
      if(temp==="logged in successful"){
        console.log(v);
        this.router.navigate(['/user']);
      } 
      // else{
      //   this.router.navigate(['/admin']);
      // }
      if(temp==="wrong password")
      {
        this.router.navigate(['/home1/login']);
      }
    });
}
}
