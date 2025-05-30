import { Component, input, Input, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';
import { InputColorComponent } from '@shared/components/input-color/input-color.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CollegeForm } from '../model/college.model';

@Component({
  selector: 'app-college-form',
  standalone: true,
  imports: [
    InputUploadComponent,
    InputColorComponent,
    InputTextComponent,
    FormsModule,
    ButtonComponent
  ],
  templateUrl: './college-form.component.html',
  styleUrl: './college-form.component.scss'
})
export class CollegeFormComponent {
  readonly form = viewChild.required<NgForm>('form');
  @Input() payload!: CollegeForm;
  disabledFields = true;

  update() { }
}
