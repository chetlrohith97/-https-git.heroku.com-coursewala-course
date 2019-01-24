import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhythisComponent } from './whythis/whythis.component';
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { CrudComponent } from './crud/crud.component';
import { Home1Component } from './home1/home1.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { User1Component } from './user1/user1.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SearchPipe } from './search.pipe';
import { NamePipe } from './name.pipe';
import { CoursePipe } from './course.pipe';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhythisComponent,
    AuthorComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    ProfileComponent,
    CartComponent,
    HistoryComponent,
    SubscriberComponent,
    CrudComponent,
    Home1Component,
    AdminComponent,
    PagenotfoundComponent,
    User1Component,
    PurchaseComponent,
    SearchPipe,
    NamePipe,
    CoursePipe,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
