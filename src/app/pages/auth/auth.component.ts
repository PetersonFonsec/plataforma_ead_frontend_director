import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ButtonComponent } from '../../shared/components/button/button.component';
import { fadeAnimation } from '../../shared/animations/fade/fade.animation';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    NgOptimizedImage,
    ButtonComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  animations: [
    fadeAnimation
  ]
})
export class AuthComponent {
}
