import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{Router}from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }
  loginData(v){
    this.http.post('api/home1/login',v).subscribe(res=>{

      localStorage.setItem('id_token',res['idToken'])

      if(res==="wrong password")
      {
        alert('wrong password')
        this.router.navigate(['/home1/login']);
      }
      else if(res=="user name not matched")
      {
        alert('user name not matched')
        this.router.navigate(['/home1/login'])
      }
      else
      {
        alert('login successfully')
        console.log(v);
        this.router.navigate(['/user']);
      } 
      
      
    });

    
}
}
