import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateService } from './create.service';
import { Router } from '@angular/router';
import { Ticket } from '../../GLOBAL/ticket';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  concertName: string = '';
  category: string = '';
  seatsAvailable: number = 0;
  price: number = 0;
  concertDateTime: string = '';

  constructor(private createService: CreateService, private router: Router) {}

  onSubmit(): void {
    const newTicket = new Ticket(
      this.concertName,
      this.category,
      this.seatsAvailable,
      this.price,
      this.concertDateTime
    );

    this.createService.createTicket(newTicket).subscribe(
      (response) => {
        alert('Ticket created successfully!');
        window.location.reload(); 
      },
      (error) => {
        console.error('Error creating ticket', error);
        alert('Error creating ticket');
      }
    );
  }
}