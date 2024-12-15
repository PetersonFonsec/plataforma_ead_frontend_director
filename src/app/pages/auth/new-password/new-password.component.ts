import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  imports: [ButtonComponent, InputTextComponent, FormsModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss'
})
export class NewPasswordComponent {
  payload = {
    password: "",
    email: "",
  } as any;

}
