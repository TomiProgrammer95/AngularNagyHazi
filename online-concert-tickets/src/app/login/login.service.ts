import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class LoginService{
    private apiUrl = 'http://localhost:8080/login';
    private apiUrlAdmin = 'http://localhost:8080/adminlogin'; 


    constructor(private http: HttpClient) {}


    login(email: string, password: string): Observable<any> {
        const credentials = { email, password };
        return this.http.post(this.apiUrl, credentials);  
      }

    adminLogin(userName: string, password: string): Observable<any> {
      const credentials = { username: userName, password };
      return this.http.post(this.apiUrlAdmin, credentials);  
    }
}