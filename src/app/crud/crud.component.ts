import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  data:any[];
  edit:any={};
  coursename:string;
  coursedetails:string;
  courseauthor:string;
  authordetails:string;
  authorimage:string;
  enterprice:string;
  user:string;
  samplefile:string;
  mainfile:string;
  searchTerm:string;
  p:number;


  constructor(private ds:DataService, private crud:CrudService) { }

  ngOnInit() 
  { 
    this.crud.readFromCrud().subscribe(temp=>{this.data=temp})
  }
  addData(v)
  {
    console.log(v)
    this.data.push(v);
    this.coursename="";
    this.coursedetails="";
    this.courseauthor="";
    this.authordetails="";
    this.authorimage="";
    this.enterprice="";
    this.user="";
    this.samplefile="";
    this.mainfile="";
    this.crud.readDataCrud(v).subscribe();
  }
  editData(v)
  {
    console.log(v)
    this.edit=v;
  }
  deleteData(v)
  {
    this.data.splice(v,1);
  }

saveData(){
  console.log(this.edit)
  this.crud.dataFromCrudTs(this.edit).subscribe(temp=>{this.data=temp;})
}

}
