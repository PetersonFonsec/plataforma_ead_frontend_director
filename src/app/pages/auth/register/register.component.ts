
import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { AlertComponent, AlertTypes } from '../../../shared/components/alert/alert.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../services/auth/auth.service';
import { Roles } from '../../../shared/enums/roles.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { fadeAnimation } from '../../../shared/animations/fade/fade.animation';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent, InputTextComponent, RouterLink, FormsModule, AlertComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  animations: [fadeAnimation]
})
export class RegisterComponent {
  #authService = inject(AuthService);
  alertType = AlertTypes.error;
  #router = inject(Router);
  error = "";

  payload = {
    role: Roles.DIRECTOR,
    confirm_password: "",
    documentNumber: "",
    password: "",
    email: "",
    name: "",
  };

  submit() {
    this.#authService.register(this.payload).subscribe({
      next: () => {
        this.#router.navigateByUrl("/area-logada/list-college");
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.error.message
      }
    })
  }
}
