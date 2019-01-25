import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData:object=[];
  b:boolean=false;
  data:object;
name:string;
username:string;
email:string;
number:string;  
 

  constructor(private profile:ProfileService) { }

  //retriving data from service
  ngOnInit() {
    this.profile.readProfile().subscribe(temp=>{this.data=temp;})
  }
  editProfile(v){
    this.profileData=v;
    console.log(v);
  }

  saveProfile(){
    this.profile.readSaveProfile(this.profileData);
  }
}