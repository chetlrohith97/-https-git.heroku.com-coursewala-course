import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  //reading data form server.js
  readProfile():Observable<any>{
    return this.http.get('user/profile');
  }

  readSaveProfile(v){
    this.http.put('user/profile',v ).subscribe();
    console.log(v);
  }
}