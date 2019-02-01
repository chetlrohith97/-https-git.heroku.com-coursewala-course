import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  readDataCrud(v):Observable<any>{
  return  this.http.post('api/admin/crud',v)

  }

  readFromCrud():Observable<any>
  {
    return this.http.get("api/admin/crud")
  }

  dataFromCrudTs(v):Observable<any>
{
  return this.http.put<any>('api/admin/crud',v)
}}


