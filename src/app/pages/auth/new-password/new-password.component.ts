import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [ButtonComponent, InputTextComponent, RouterLink, FormsModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss'
})
export class NewPasswordComponent {
  payload = {
    password: "",
    email: "",
  } as any;

}
