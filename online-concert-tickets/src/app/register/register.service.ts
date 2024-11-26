import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class RegisterService{

    private apiUrl = 'http://localhost:8080/register'; // API endpoint

    constructor(private http: HttpClient) {}


    register(email: string, password: string, userName: string): Observable<any> {
        const credentials = { email, password, username: userName };
        return this.http.post(this.apiUrl, credentials);  
      }
}