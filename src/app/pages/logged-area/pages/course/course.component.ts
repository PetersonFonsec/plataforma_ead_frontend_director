import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';

import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { PageThumbComponent } from '@shared/components/page-thumb/page-thumb.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { CourseService } from '@shared/services/course/course.service';
import { CourseForm } from '@shared/services/course/course.model';
import { CollegeComponent } from '../college/college.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    ButtonComponent,
    SelectComponent,
    InputUploadComponent,
    InputTextComponent,
    PageThumbComponent,
    AlertComponent,
    CourseFormComponent,
    ButtonBackComponent,
    CommonModule
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  #router = inject(ActivatedRoute);
  #course = inject(CourseService);
  alertType = AlertTypes.success;
  payload = new CourseForm();
  alertMessage = "";

  ngOnInit(): void {
    this.#router.paramMap.subscribe({
      next: params => {
        const collegeId = Number(params.get('id'));
        if (this.payload.name) return;
        this.getCourse(collegeId);
      }
    });
  }

  private getCourse(courseId: string | number) {
    this.#course.getCourse(courseId).subscribe({
      next: (course) => {
        this.payload.thumb = course.thumb;
        this.payload.name = course.name;
        this.payload.id = course.id;
      },
      error: (error) => {
        this.alertType = AlertTypes.error;
        this.alertMessage = error.message;
      }
    })
  }

  update() { }

  submit() { }
}
