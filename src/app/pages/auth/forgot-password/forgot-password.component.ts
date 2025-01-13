import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';

import { ButtonComponent } from '@shared/components/button/button.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ButtonComponent, InputTextComponent, FormsModule, ButtonBackComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  payload = {
    password: "",
    email: "",
  } as any;

}
