import { Component, OnInit } from '@angular/core';
import { JavaService } from '../java.service';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-javacomponent',
  templateUrl: './javacomponent.component.html',
  styleUrls: ['./javacomponent.component.css']
})
export class JavacomponentComponent implements OnInit {
data:string;
  constructor(private java:JavaService,private router:Router) { }

 
ngOnInit()
{
   this.java.readdata().subscribe(temp=>{this.data=temp
 }) 
}

 addCart(v)
 {
   this.java.readdata1(v);
   this.router.navigate(['user/cart']);
 }
download(){
 
  //download pdf
  var doc=new jspdf();
  doc.setFontSize(40);
  doc.setTextColor(150,1220,120);
  doc.text(60,60,'Sampile File');
  doc.save('sample.pdf');
}

}
