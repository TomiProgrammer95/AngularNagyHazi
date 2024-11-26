export class BuyDTO {
    email: string;
    username: string;
    password: string;
    concertName: string;
    category: string;
    seatsAvailable: number;
    price: number;
    concertDateTime: string;
    quantity: number;
  
    constructor(
      email: string,
      username: string,
      password: string,
      concertName: string,
      category: string,
      seatsAvailable: number,
      price: number,
      concertDateTime: string,
      quantity: number
    ) {
      this.email = email;
      this.username = username;
      this.password = password;
      this.concertName = concertName;
      this.category = category;
      this.seatsAvailable = seatsAvailable;
      this.price = price;
      this.concertDateTime = concertDateTime;
      this.quantity = quantity;
    }
  }
  