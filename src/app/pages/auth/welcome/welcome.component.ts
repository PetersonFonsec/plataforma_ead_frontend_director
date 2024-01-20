import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
