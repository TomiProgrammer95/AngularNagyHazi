export interface PurchasedTicket {
    category: string;
    concertDateTime: string; // LocalDateTime formátum, stringként kezelendő
    concertName: string;
    quantity: number;
  }