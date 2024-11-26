import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {RegisterService} from './register.service'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  userName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private registerService: RegisterService) {}


  onSubmit(form: any): void {
    if (form.valid) {
        this.registerService.register(this.email, this.password, this.userName).subscribe(
          response => {
                console.log('Válasz:', response);
                alert('Regisztráció sikeres!');
                this.router.navigate(['/login']);
            },
            error => {
                console.error('Hiba a regisztráció során:', error);
                alert('Hiba történt a regisztráció során.');
            },
        );
    }
}
}