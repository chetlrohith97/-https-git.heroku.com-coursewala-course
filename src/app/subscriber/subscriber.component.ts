import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SubscriberService } from '../subscriber.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {
  data:object[]=[];
  p:number;
  constructor(private sub:SubscriberService) { }

  ngOnInit() 
  {
    // this.ds.getData2().subscribe(temp=>{this.data=temp;})
    this.sub.subsData().subscribe(temp=>{this.data=temp;
    console.log(temp)
  });
  }
 
   
}
