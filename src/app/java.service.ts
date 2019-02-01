import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http:HttpClient) { }
  
  readdata():Observable<any>
  {
    console.log();
    return this.http.get<any>('api/user/java');
    
  }


  readdata1(v)
  {
    this.http.post('api/user/java',v).subscribe(temp=>{console.log(temp)});
  }
}
