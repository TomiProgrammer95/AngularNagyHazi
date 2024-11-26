import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  private userId!: number;
  private userEmail: string = '';
  private userName: string = '';
  private userPassword: string = '';

  private userLogin: boolean = false;
  private adminLogin: boolean = false;

  constructor() {
    this.loadData();
  }


  setUserId(userId: number){
    this.userId = userId;
    localStorage.setItem('userId', JSON.stringify(userId));
  }

  getUserId(): number{
    return this.userId;
  }


  setEmail(userEmail: string){
    this.userEmail = userEmail;
    localStorage.setItem('userEmail', userEmail);
  }

  getEmail(): string{
    return this.userEmail;
  }

  setPassword(password: string){
    this.userPassword = password;
    localStorage.setItem('userPassword', password);
  }

  getPassword(): string {
    return this.userPassword;
  }

  // Beállítjuk a felhasználó nevét
  setUserName(name: string): void {
    this.userName = name;
    localStorage.setItem('userName', name);  // Mentés a localStorage-ba
  }

  // Visszaadjuk a felhasználó nevét
  getUserName(): string {
    return this.userName;
  }

  // Beállítjuk a felhasználó bejelentkezési állapotát
  setUserLoginStatus(status: boolean): void {
    this.userLogin = status;
    localStorage.setItem('userLogin', JSON.stringify(status));  // Mentés a localStorage-ba
  }

  // Beállítjuk az admin bejelentkezési állapotát
  setAdminLoginStatus(status: boolean): void {
    this.adminLogin = status;
    localStorage.setItem('adminLogin', JSON.stringify(status));  // Mentés a localStorage-ba
  }

  // Metódusok az állapotok lekérdezésére
  getUserLoginStatus(): boolean {
    return this.userLogin;
  }

  getAdminLoginStatus(): boolean {
    return this.adminLogin;
  }

  // Adatok betöltése a localStorage-ból
  private loadData(): void {
    const storedUesrId = localStorage .getItem('userId');
    const storedUserPassword = localStorage.getItem('userPassword');
    const storedUserEmail = localStorage.getItem('userEmail');
    const storedUserName = localStorage.getItem('userName');
    const storedUserLogin = localStorage.getItem('userLogin');
    const storedAdminLogin = localStorage.getItem('adminLogin');

    // Ha találunk adatokat, akkor betöltjük őket
    this.userId = Number(storedUesrId) || 0;
    this.userPassword = storedUserPassword || '';
    this.userEmail = storedUserEmail || '';
    this.userName = storedUserName || '';
    this.userLogin = storedUserLogin ? JSON.parse(storedUserLogin) : false;
    this.adminLogin = storedAdminLogin ? JSON.parse(storedAdminLogin) : false;
  }

  // Törlés a localStorage-ból (pl. kijelentkezéskor)
  clearData(): void {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('userName');
    localStorage.removeItem('userLogin');
    localStorage.removeItem('adminLogin');
    localStorage.removeItem('userId');
   
  }
  
}
