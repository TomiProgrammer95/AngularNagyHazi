import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {EditComponent} from './edit/edit.component';
import {BuyComponent} from './home/buy/buy.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'buy/:id', component: BuyComponent },
    { path: 'login', component: LoginComponent }, // Login oldal
    { path: 'register', component: RegisterComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: '**', redirectTo: '' } 
];
