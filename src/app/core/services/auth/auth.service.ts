import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient:HttpClient) { }

  login(userData:any):Observable<any> {
    return this.HttpClient.post<any>("auth/login" , userData);
  }
}
