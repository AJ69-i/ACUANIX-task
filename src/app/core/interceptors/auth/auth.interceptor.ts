import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import * as iziToast from "iziToast";
import { environment } from 'src/environments/environment.development';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router :Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const NewRequest = request.clone({
      headers : request.headers.set("Content-Type", "application/json"),
      url: environment.baseUrl + request.url
    }
  );
  return next.handle(NewRequest).pipe (
    catchError((error) => {
      if(error instanceof HttpErrorResponse) {
        if(error.error instanceof ErrorEvent) {
          console.log("An Error Event Occured");
        }
        else {
          switch(error.status) {
            case 400:
              iziToast.default.error({
                title: "Error",
                message: "Bad Request",
                timeout: 3000,
                position: 'bottomRight',
                transitionIn: 'fadeIn',
                transitionOut: 'fadeOutLeft',
                drag: true,
                transitionInMobile: 'fadeInDown',
                transitionOutMobile: 'fadeOutDown',
              });
              break;
          }
        }
      }
      else {
        console.log("An Error Occured");
      }
      return throwError( () => new Error(error.statusCode) );
    }
    )
  );
  }
}
