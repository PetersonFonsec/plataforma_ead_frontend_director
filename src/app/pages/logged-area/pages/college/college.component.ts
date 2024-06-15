import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CollegeService } from '@shared/services/college/college.service';
import { ButtonComponent } from '@shared/components/button/button.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { CourseItemComponent } from '@shared/components/course-item/course-item.component';
import { InputColorComponent } from '@shared/components/input-color/input-color.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { CollegeThumbComponent } from './college-thumb/college-thumb.component';
import { CollegeFormComponent } from './college-form/college-form.component';
import { CollegeListComponent } from './college-list/college-list.component';

@Component({
  selector: 'app-college',
  standalone: true,
  imports: [
    ButtonBackComponent,
    ButtonComponent,
    AlertComponent,
    CollegeFormComponent,
    CollegeThumbComponent,
    CollegeListComponent
  ],
  templateUrl: './college.component.html',
  styleUrl: './college.component.scss'
})
export class CollegeComponent {
  #collegeService = inject(CollegeService);
  alertType = AlertTypes.success;
  alertMessage = "";

  update() { }

  submit() { }
}
