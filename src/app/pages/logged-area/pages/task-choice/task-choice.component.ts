import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { InputCardComponent } from '@shared/components/input-card/input-card.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-task-choice',
  standalone: true,
  imports: [
    ButtonBackComponent,
    ButtonComponent,
    RouterLink,
    InputCardComponent,
    FormsModule
  ],
  templateUrl: './task-choice.component.html',
  styleUrl: './task-choice.component.scss'
})
export class TaskChoiceComponent {
  task = '';
}
