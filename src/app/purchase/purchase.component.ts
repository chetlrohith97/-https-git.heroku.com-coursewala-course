import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
data:object[]=[];
  constructor(private ds:DataService) { }

  ngOnInit() 
  {
  this.ds.getData3().subscribe(temp=>{this.data=temp;})
  }


}
