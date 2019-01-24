import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  
  constructor(private http:HttpClient) { }
  
getData():Observable<any>
{
  return this.http.get<any>("assets/cart.json");
}
getData1():Observable<any>
{
  return this.http.get<any>("assets/history.json");
}
getData2():Observable<any>
{
  return this.http.get<any>("assets/subscriber.json");
}
getData3():Observable<any>
{
  return this.http.get<any>("assets/purchase.json");
}
getData4():Observable<any>
{
  return this.http.get<any>("assets/crud.json");
}
}
