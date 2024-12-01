import { AfterViewInit, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { AlertComponent, AlertTypes } from '../../../shared/components/alert/alert.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../services/auth/auth.service';
import { fadeAnimation } from '../../../shared/animations/fade/fade.animation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, InputTextComponent, RouterLink, FormsModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [fadeAnimation]
})
export class LoginComponent {
  #liveAnnouncer = inject(LiveAnnouncer);
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
        this.#liveAnnouncer.announce("Login realizado com sucesso");
        this.#router.navigateByUrl("/area-logada/home");
      },
      error: (error: HttpErrorResponse) => {
        this.#liveAnnouncer.announce("Houve um erro ao realizar login");
        this.error = error.error.message;
      }
    })
  }
}
