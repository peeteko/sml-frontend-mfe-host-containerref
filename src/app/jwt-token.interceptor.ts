import { Injectable, OnInit } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor, OnInit {

  constructor() {
    console.log("constructor JwtTokenInterceptor in sml frontend");
  }

  ngOnInit(): void {
    console.log("onInit JwtTokenInterceptor in sml frontend");
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("intercept in sml frontend");
    return next.handle(request);
  }
}
