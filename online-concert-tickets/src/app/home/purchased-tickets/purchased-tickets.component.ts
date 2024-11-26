import { Component, OnInit } from '@angular/core';
import {PurchasedTicket} from "../../GLOBAL/purchasedTicket";
import {PurchasedTicketService} from "./purchased-tickets.service";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocalStorage } from '../../LocalStorage/local-storage.service';

@Component({
  selector: 'app-purchase-ticket',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './purchased-tickets.component.html',
  styleUrl: './purchased-tickets.component.css'
})
export class UserProfileComponent implements OnInit {

  ticket: PurchasedTicket[] = [];
  name: string = "";

  constructor(private purchasedTicketService: PurchasedTicketService, private localStorage: LocalStorage){
    this.name = this.localStorage.getUserName();
  }

  ngOnInit() {
    this.purchasedTicketService.getPurchasedTickets().subscribe(data => {
      this.ticket = data;
    })
    console.log(this.ticket);
  }


}


