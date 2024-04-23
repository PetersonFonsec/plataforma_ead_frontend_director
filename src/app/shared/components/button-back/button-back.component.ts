import { Component, Input, inject } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-back',
  standalone: true,
  imports: [ButtonComponent, FontAwesomeModule],
  templateUrl: './button-back.component.html',
  styleUrl: './button-back.component.scss'
})
export class ButtonBackComponent {
  @Input() id = "";
  icon = faArrowLeft;
}
