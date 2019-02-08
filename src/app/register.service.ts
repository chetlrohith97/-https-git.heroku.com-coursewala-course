import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{Router}from '@angular/router'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private router:Router) { }
  getData(v):Observable<any>{
    console.log(v);
    alert('Registered successfully')
   return this.http.post('api/home1/register',v);
  }
}



