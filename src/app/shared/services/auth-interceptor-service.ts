import {  HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  authToken = localStorage.getItem('token')
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    if(req.url.includes('login')){
      return next.handle(req);
    }
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.authToken}`),
    });
    console.log('intercept')
    return next.handle(authRequest);
  }
  constructor() { }
}
