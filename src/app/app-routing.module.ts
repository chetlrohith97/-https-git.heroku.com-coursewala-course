import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhythisComponent } from './whythis/whythis.component';
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { Home1Component } from './home1/home1.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { User1Component } from './user1/user1.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { CrudComponent } from './crud/crud.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  {path:"home1",component:Home1Component,
  children:[{path:"home",component:HomeComponent},
  {path:"whythis",component:WhythisComponent},
  {path:"authors",component:AuthorComponent},
  {path:"register",component:RegistrationComponent},  
  {path:"login",component:LoginComponent},]},
  {path:"home1/login/register",component:RegistrationComponent},
  
 
  {path:"user",component:UserComponent,
  children:[{path:"",component:User1Component},
  {path:"profile",component:ProfileComponent},
  {path:"cart",component:CartComponent},
  {path:"history",component:HistoryComponent}]},
  

  {path:"admin",component:AdminComponent,
  children:[{path:"subscriber",component:SubscriberComponent},
  {path:"purchase",component:PurchaseComponent},
  {path:"crud",component:CrudComponent},
  {path:"author",component:AuthorComponent}]},


   {path:"",redirectTo:'home1/home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
