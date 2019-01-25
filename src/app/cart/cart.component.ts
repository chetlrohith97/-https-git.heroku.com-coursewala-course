import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data:object[]=[];
  constructor(private ds:DataService) { }
p:number;
courseTerm:string;
  ngOnInit() 
  {
    this.ds.getData().subscribe(temp=>{this.data=temp})
  }
}
