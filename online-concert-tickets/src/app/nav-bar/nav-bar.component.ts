import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LocalStorage } from '../LocalStorage/local-storage.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  userLogin: boolean = false;
  adminLogin: boolean = false;

  constructor(private router: Router, private localStorage: LocalStorage) {}

  ngOnInit(): void {
    this.userLogin = this.localStorage.getUserLoginStatus();
    this.adminLogin = this.localStorage.getAdminLoginStatus();
    
  }

  navigateToLogin() {
    this.router.navigate(['/login']); // Navigálás a "Login" oldalra
  }

  logOut(){
    this.localStorage.clearData();
    window.location.reload(); 
  }

}
