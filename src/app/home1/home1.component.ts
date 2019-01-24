import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
data:object[]=[];
  constructor(private dd:DropdownService) { }

  ngOnInit() {
    this.dd.getData().subscribe(temp=>{this.data=temp;
    console.log(temp);
  });
  }

}
