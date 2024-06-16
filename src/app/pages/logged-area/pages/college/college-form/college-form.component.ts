import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';
import { InputColorComponent } from '@shared/components/input-color/input-color.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { ButtonComponent } from '@shared/components/button/button.component';

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
  @ViewChild('form', { static: false }) form!: NgForm;
  disabledFields = true;
  payload = {
    secundaryColor: "",
    primaryColor: "",
    thumb: "",
    name: "",
  }

  update() {

  }
}
