import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { AlertComponent, AlertTypes } from '../../../shared/components/alert/alert.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ErrorDefault } from '../../../shared/interfaces/error.model';
import { AuthService } from '../services/auth/auth.service';
import { fadeAnimation } from '../../../shared/animations/fade/fade.animation';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, InputTextComponent, RouterLink, FormsModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [fadeAnimation]
})
export class LoginComponent {
  #authService = inject(AuthService);
  alertType = AlertTypes.error;
  #router = inject(Router);
  error = ""

  payload = {
    password: "",
    email: "",
  };

  submit() {
    this.#authService.login(this.payload).subscribe({
      next: () => {
        this.#router.navigateByUrl("/home")
      },
      error: (error: ErrorDefault) => {
        this.error = error.message
      }
    })
  }
}
