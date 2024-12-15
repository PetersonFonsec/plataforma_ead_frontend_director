import { Component, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormsModule } from '@angular/forms';

import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { fadeAnimation } from '@shared/animations/fade/fade.animation';

import { AuthService } from '../services/auth/auth.service';
import { InputMsgErrorComponent } from '@shared/components/input-msg-error/input-msg-error.component';
import { CommonModule } from '@angular/common';
import { NgModelErrorPipe } from '@shared/pipes/ngModel/ng-model-error.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    InputTextComponent,
    RouterLink,
    FormsModule,
    AlertComponent,
    InputMsgErrorComponent,
    NgModelErrorPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [fadeAnimation]
})
export class LoginComponent {
  #liveAnnouncer = inject(LiveAnnouncer);
  #authService = inject(AuthService);
  alertType = AlertTypes.error;
  #router = inject(Router);
  error = "";

  payload: any = {};

  submit() {
    this.#authService.login(this.payload).subscribe({
      next: () => {
        this.#liveAnnouncer.announce("Login realizado com sucesso");
        this.#router.navigateByUrl("/area-logada/home");
      },
      error: (error: HttpErrorResponse) => {
        this.#liveAnnouncer.announce("Houve um erro ao realizar login");
        this.error = error.error.message[0];
      }
    })
  }
}
