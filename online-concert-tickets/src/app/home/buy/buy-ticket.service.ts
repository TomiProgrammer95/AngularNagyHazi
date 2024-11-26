import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {BuyDTO} from "../../GLOBAL/buyDTO";
import { Ticket } from "../../GLOBAL/ticket";

@Injectable({
    providedIn: 'root',
  })
  export class BuyTicketService {
    
    private buyTicketsUrl = 'http://localhost:8080/buy'; // API endpoint
    private apiUrl = 'http://localhost:8080/admin/ticket';

    constructor(private http: HttpClient) {}
  
    getTicketById(id: number): Observable<Ticket> {
        return this.http.get<Ticket>(`${this.apiUrl}/${id}`);
      }
  
    buyTickets(buyDTO: BuyDTO): Observable<any>{
      return this.http.post(this.buyTicketsUrl, buyDTO);
    }
  
   
  
  }