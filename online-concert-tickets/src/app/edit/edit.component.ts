import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../GLOBAL/ticket';
import { EditService } from "./edit.service";


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  id!: number;
  concertName: string = '';
  category: string = '';
  seatsAvailable: number = 0;
  price: number = 0;
  concertDateTime: string = '';
  ticket!: Ticket;

  constructor(private route: ActivatedRoute, private editService: EditService, private router: Router)
  {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    
  }

  ngOnInit() {
    this.editService.getTicketById(this.id).subscribe({
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

  onSubmit(): void{
    this.ticket.concertName = this.concertName;
    this.ticket.category = this.category;
    this.ticket.seatsAvailable = this.seatsAvailable;
    this.ticket.price = this.price;
    this.ticket.concertDateTime = this.concertDateTime;
    
    this.editService.updateTicket(this.id, this.ticket).subscribe({
      next: (response) => {
        console.log('Ticket updated successfully:', response);
        alert('Jegy sikeresen frissítve!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error updating ticket:', err);
        alert('Hiba történt a jegy frissítése során.');
      }
    });;
  }

}
