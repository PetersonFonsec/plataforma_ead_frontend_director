import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { PageThumbComponent } from '@shared/components/page-thumb/page-thumb.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CourseForm } from '@shared/services/course/course.model';
import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';

@Component({
    selector: 'app-course-form',
    imports: [
        InputTextComponent,
        InputUploadComponent,
        FormsModule,
    ],
    templateUrl: './course-form.component.html',
    styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  @Input() payload = new CourseForm();
  alertType = AlertTypes.success;
  alertMessage = "";
  disabledFields = true;

}
