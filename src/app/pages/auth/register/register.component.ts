import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent, InputTextComponent, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  payload = {
    password: "",
    email: "",
  } as any;

}
