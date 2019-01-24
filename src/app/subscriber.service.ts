import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http:HttpClient) { }

  subsData():Observable<any>{
    return this.http.get('admin/subscriber');
  }
}
