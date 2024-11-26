import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ticket } from "../GLOBAL/ticket"


@Injectable({
    providedIn: 'root',
  })
  export class EditService {
    private apiUrl = 'http://localhost:8080/admin/ticket'; // Backend API endpoint
  
    constructor(private http: HttpClient) {}
  
    getTicketById(id: number): Observable<Ticket> {
      return this.http.get<Ticket>(`${this.apiUrl}/${id}`);
    }

    updateTicket(id: number, ticket: Ticket): Observable<Ticket> {
        return this.http.put<Ticket>(`http://localhost:8080/admin/edit/${id}`, ticket);
      }


  }