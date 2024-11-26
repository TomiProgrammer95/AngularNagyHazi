import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LocalStorage } from "../../LocalStorage/local-storage.service";
import { PurchasedTicket } from "../../GLOBAL/purchasedTicket";

@Injectable({
    providedIn: 'root',
  })
  export class PurchasedTicketService {
    private apiUrl = 'http://localhost:8080/purchasedTickets'; // Backend API endpoint
    id: number;
  
    constructor(private http: HttpClient, private localStorage: LocalStorage) { 
        this.id = this.localStorage.getUserId();
    }
  
    getPurchasedTickets(): Observable<PurchasedTicket[]> {
      return this.http.get<PurchasedTicket[]>(`${this.apiUrl}/${this.id}`);
    }

    

  }