
import { FormsModule } from '@angular/forms';
import { Component, inject, signal } from '@angular/core';
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
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Utils } from '@shared/services/utils/utils.service';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  animations: [fadeAnimation]
})
export class RegisterComponent {
  #liveAnnouncer = inject(LiveAnnouncer);
  #authService = inject(AuthService);
  payload = new RegisterPayload();
  alertType = AlertTypes.error;
  #router = inject(Router);
  error = signal("");

  submit() {
    this.#authService.register(this.payload).subscribe({
      next: ({ user }) => {
        this.#liveAnnouncer.announce("Login realizado com sucesso");
        this.#router.navigateByUrl(Utils.getRouteByRole(user.role));
      },
      error: (error: HttpErrorResponse) => {
        this.#liveAnnouncer.announce("Houve um erro ao realizar login");
        this.error.set(error.error.message);
      }
    })
  }
}
