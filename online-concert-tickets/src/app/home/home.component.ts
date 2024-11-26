import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket.service';
import { Ticket } from '../GLOBAL/ticket';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import {LocalStorage} from '../LocalStorage/local-storage.service';
import { Router } from '@angular/router';
import { UserProfileComponent } from "./purchased-tickets/purchased-tickets.component";
import { CreateComponent } from "./create/create.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavBarComponent, CreateComponent, UserProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  tickets: Ticket[] = [];
  userLogin: boolean = false;
  adminLogin: boolean = false;
  quantity: number = 3;
  wantToAdd: boolean = false;
  
  
  constructor(private ticketService: TicketService, private localStorage: LocalStorage, private router: Router){ }

  ngOnInit(): void {
    this.userLogin = this.localStorage.getUserLoginStatus();
    this.adminLogin = this.localStorage.getAdminLoginStatus();

     this.ticketService.getTickets().subscribe( data => {
      this.tickets = data;
      this.tickets.sort((a, b) => a.concertName.localeCompare(b.concertName));
    });
  }

  
  buy(ticket: Ticket){
    this.router.navigate(['/buy', ticket.id]);
  }

  delet(id: number) {
    this.ticketService.deletTicket(id).subscribe(
      (response) => {
        console.log(response);
        alert('Törlés Sikeres!')
        window.location.reload(); 
      },
      (error) => {
        alert('Törlés NEM volt sikeres!')
        console.error('Hiba történt a jegy törlésekor:', error);
      }
    );
  }

  edit(ticket: Ticket) {
    this.router.navigate(['/edit', ticket.id]);
  }

    

}