export class Ticket {
  id?: number;
  concertName: string;
  category: string;
  seatsAvailable: number;
  price: number;
  concertDateTime: string;

  constructor(
  
    concertName: string,
    category: string,
    seatsAvailable: number,
    price: number,
    concertDateTime: string
  ) {
    
    this.concertName = concertName;
    this.category = category;
    this.seatsAvailable = seatsAvailable;
    this.price = price;
    this.concertDateTime = concertDateTime;
  }
}
  