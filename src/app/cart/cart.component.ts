import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data:object[]=[];
  constructor(private http:HttpClient) { }
p:number;
courseTerm:string;
searchTerm:string;
ngOnInit() 
{
  this.http.get<any>("api/user/cart").subscribe(temp=>{this.data=temp})
  }
}
