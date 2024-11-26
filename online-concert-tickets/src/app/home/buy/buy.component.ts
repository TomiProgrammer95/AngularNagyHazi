import { Component } from '@angular/core';
import { Ticket } from '../../GLOBAL/ticket';
import { ActivatedRoute, Router } from '@angular/router';
import {BuyTicketService} from './buy-ticket.service';
import { BuyDTO } from '../../GLOBAL/buyDTO';
import { LocalStorage } from '../../LocalStorage/local-storage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {

  id!: number;
  concertName: string = '';
  category: string = '';
  seatsAvailable: number = 0;
  price: number = 0;
  concertDateTime: string = '';
  ticket!: Ticket;
  quantity: number = 0;

  constructor(private route: ActivatedRoute, private buyTicketService: BuyTicketService, private localStorage: LocalStorage, private router: Router)
  {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    
  }


  ngOnInit() {
    this.buyTicketService.getTicketById(this.id).subscribe({
        next: (data) => {
            this.ticket = data;
            this.concertName = this.ticket.concertName;
            this.category = this.ticket.category;
            this.seatsAvailable = this.ticket.seatsAvailable;
            this.price = this.ticket.price;
            this.concertDateTime = this.ticket.concertDateTime;
            console.log(this.ticket);
        },
        error: (err) => {
            console.error('Error fetching ticket:', err);
        }
    });
}

buy(ticket: Ticket){
  const buyDTO: BuyDTO = {
    email: this.localStorage.getEmail(),
    username: this.localStorage.getUserName(),
    password: this.localStorage.getPassword(),
    concertName: ticket.concertName,
    category: ticket.category,
    seatsAvailable: ticket.seatsAvailable,
    price: ticket.price,
    concertDateTime: ticket.concertDateTime,
    quantity: this.quantity 
};
  this.buyTicketService.buyTickets(buyDTO).subscribe(
    response => {
      console.log('Jegyvásárlás sikeres:', response);
      alert('Vásárlás sikeres!');
      this.router.navigate(['/']);
    },
    error => {
      console.error('Hiba történt a vásárlás során:', error);
    }
  );
}

}
