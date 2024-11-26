import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {LoginService} from './login.service';
import {LocalStorage} from '../LocalStorage/local-storage.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService, private localStorage: LocalStorage) {}

  onSubmit() {
    if(this.email != 'admin'){
      this.loginService.login(this.email, this.password).subscribe(response => {
        console.log('Bejelentkezés sikeres!', response);
        this.localStorage.clearData();
        this.localStorage.setUserLoginStatus(true);
        this.localStorage.setUserId(response.id);
        this.localStorage.setUserName(response.username);
        this.localStorage.setEmail(response.email);
        this.localStorage.setPassword(response.password);
        this.router.navigate(['/']);
      }, error => {
        console.error('Hiba a bejelentkezés során', error);
        alert('Belépés sikertelen');
      });
    }
    if(this.email === 'admin'){
      this.loginService.adminLogin(this.email, this.password).subscribe(response => {
        console.log('Bejelentkezés sikeres!', response);
        this.localStorage.clearData();
        this.localStorage.setAdminLoginStatus(true);
        this.localStorage.setUserName(response.username);
        this.router.navigate(['/']);
      }, error => {
        console.error('Hiba a bejelentkezés során', error);
        alert('Belépés sikertelen');
      });
    }
  }


  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}