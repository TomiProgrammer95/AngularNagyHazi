import { Injectable } from '@angular/core';
import { Ticket } from '../GLOBAL/ticket';
import { HttpClient } from '@angular/common/http';
import {User} from '../GLOBAL/user';
import { Observable } from 'rxjs';
import {BuyDTO} from "../GLOBAL/buyDTO";

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private getTicketsUrl = 'http://localhost:8080/tickets'; // API endpoint
  private deleteTicketUrl = 'http://localhost:8080/admin/delete'; // API endpoint


  constructor(private http: HttpClient) {}


  getTickets() {
    return this.http.get<Ticket[]>(this.getTicketsUrl);   
  }


  deletTicket(id: number ){
    return this.http.delete(`${this.deleteTicketUrl}/${id}`);
  }

}