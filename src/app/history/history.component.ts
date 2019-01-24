import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  data:object[]=[];
  constructor(private ds:DataService) { }

  ngOnInit()
  {
    this.ds.getData1().subscribe(temp=>{this.data=temp})
  }

}
