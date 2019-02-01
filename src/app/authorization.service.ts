import { Component, OnInit } from '@angular/core';
import{Injectable} from '@angular/core';
import{HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import{Observable} from 'rxjs';


@Injectable()

export class Authorization implements HttpInterceptor {

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    //read token from localstorage

    const idTOken=localStorage.getItem("id_token");
    //if token found clone it ti requese object at header
    if(idTOken){
      const cloned=req.clone({
         headers:req.headers.set("Autorization","Bearer "+idTOken) 
      });
    return next.handle(cloned);
    }
    else{
      return next.handle(req);
    }

  }



  






}
