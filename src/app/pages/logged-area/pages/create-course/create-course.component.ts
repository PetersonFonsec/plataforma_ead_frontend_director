import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { ButtonComponent } from '@shared/components/button/button.component';

import { CreateCourse } from './create-course.model';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [
    ButtonComponent,
    SelectComponent,
    InputUploadComponent,
    InputTextComponent,
    FormsModule,
    ButtonBackComponent,
    AlertComponent
  ],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss'
})
export class CreateCourseComponent {
  payload = new CreateCourse()
  alertType = AlertTypes.success;
  alertMessage = "";

  submit() {

  }
}
