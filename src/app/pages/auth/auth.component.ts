import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NgOptimizedImage } from '@angular/common'
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent, NgOptimizedImage, ButtonComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
