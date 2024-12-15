
import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { AlertComponent, AlertTypes } from '../../../shared/components/alert/alert.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { fadeAnimation } from '../../../shared/animations/fade/fade.animation';
import { NgModelErrorPipe } from '@shared/pipes/ngModel/ng-model-error.pipe';
import { InputMsgErrorComponent } from '@shared/components/input-msg-error/input-msg-error.component';
import { RegisterPayload } from './register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent, InputTextComponent, RouterLink, FormsModule, AlertComponent,
    InputMsgErrorComponent,
    NgModelErrorPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  animations: [fadeAnimation]
})
export class RegisterComponent {
  #authService = inject(AuthService);
  payload = new RegisterPayload();
  alertType = AlertTypes.error;
  #router = inject(Router);
  error = "";

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
