import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../../GLOBAL/ticket';

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  private apiUrl = 'http://localhost:8080/admin/add'; // Backend API endpoint

  constructor(private http: HttpClient) {}

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, ticket);
  }
}
