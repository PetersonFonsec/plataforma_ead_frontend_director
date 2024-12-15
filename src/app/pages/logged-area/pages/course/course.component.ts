import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { PageThumbComponent } from '@shared/components/page-thumb/page-thumb.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { ItemBarComponent } from '@shared/components/item-bar/item-bar.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { CourseService } from '@shared/services/course/course.service';
import { CourseForm } from '@shared/services/course/course.model';

import { CourseFormComponent } from './course-form/course-form.component';
import { concatAll, concatMap, forkJoin, map } from 'rxjs';
import { PageThumbLoaderComponent } from '@shared/components/loaders/page-thumb-loader/page-thumb-loader.component';
import { CourseListComponent } from './course-list/course-list.component';
@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    ButtonComponent,
    PageThumbComponent,
    AlertComponent,
    CourseFormComponent,
    ButtonBackComponent,
    CommonModule,
    RouterLink,
    PageThumbLoaderComponent,
    CourseListComponent
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
  lessons: any[] = [];
  quizes: any[] = [];
  tasks: any[] = [];
  isLoading = true;

  public ngOnInit(): void {
    this.#router.paramMap.subscribe({
      next: params => {
        const collegeId = Number(params.get('id'));
        this.getCourse(collegeId);
      }
    });
  }

  private getCourse(courseId: string | number) {
    const course$ = this.#course.getCourse(courseId);
    const content$ = this.#course.getContent(courseId);

    forkJoin([course$, content$]).subscribe({
      next: ([course, content]) => {
        this.payload.thumb = course.thumb;
        this.payload.name = course.name;
        this.payload.id = course.id;

        this.tasks = content.tasks;
        this.quizes = content.quizes;
        this.lessons = content.lessons;

        this.isLoading = false;
      },
      error: (error) => {
        this.alertType = AlertTypes.error;
        this.alertMessage = error.message;

        this.isLoading = false;
      }
    })
  }

  update() { }

  submit() { }
}
