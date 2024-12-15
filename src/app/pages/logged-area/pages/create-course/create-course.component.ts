import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { IRequestCourseCreate } from '@shared/services/course/course.model';
import { CourseService } from '@shared/services/course/course.service';

import { CreateCourse } from './create-course.model';

@Component({
  selector: 'app-create-course',
  imports: [
    ButtonComponent,
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
  #courseService = inject(CourseService);
  #activatedRoute = inject(ActivatedRoute);
  #router = inject(Router);
  payload: IRequestCourseCreate = new CreateCourse()
  alertType = AlertTypes.success;
  alertMessage = "";

  ngOnInit(): void {
    this.#activatedRoute.paramMap.subscribe({
      next: params => {
        const collegeId = params.get('id');
        if (!collegeId) return this.showError('Não foi possível buscar a univercidade');
        this.payload.collegeId = parseInt(collegeId);
      }
    });
  }

  showError(message: string): void {
    this.alertType = AlertTypes.error;
    this.alertMessage = message;
  }

  submit() {
    this.payload.thumb = this.payload?.thumb?.file ?? '';
    this.#courseService.create(this.payload).subscribe({
      next: async (college) => {
        await this.#router.navigateByUrl(`/area-logada/course/${college.id}`);
      },
      error: (error: HttpErrorResponse) => {
        this.alertType = AlertTypes.error;
        this.alertMessage = error.error.message;
      }
    });
  }
}
