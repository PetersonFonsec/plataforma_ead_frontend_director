import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LessonFormLoadingComponent } from '@pages/logged-area/pages/lesson/lesson-form-loading/lesson-form-loading.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { ButtonPlayComponent } from '@shared/components/button-play/button-play.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ItemBarComponent } from '@shared/components/item-bar/item-bar.component';
import { PageThumbLoaderComponent } from '@shared/components/loaders/page-thumb-loader/page-thumb-loader.component';
import { PageThumbComponent } from '@shared/components/page-thumb/page-thumb.component';
import { TabComponent } from '@shared/components/tab/tab.component';
import { TabContentDirective, TabHeaderDirective, TabsComponent } from '@shared/components/tabs/tabs.component';
import { CourseForm } from '@shared/services/course/course.model';
import { CourseService } from '@shared/services/course/course.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-course-id',
  imports: [
    ButtonComponent,
    ButtonBackComponent,
    CommonModule,
    RouterLink,
    PageThumbLoaderComponent,
    LessonFormLoadingComponent,
    PageThumbComponent,
    TabsComponent,
    TabComponent,
    TabContentDirective,
    TabHeaderDirective,
    ItemBarComponent,
    ButtonPlayComponent,
  ],
  templateUrl: './course-id.component.html',
  styleUrl: './course-id.component.scss'
})
export class CourseIdComponent implements OnInit {
  #router = inject(ActivatedRoute);
  #course = inject(CourseService);

  alertType = AlertTypes.success;
  alertMessage = "";

  lessons: any[] = [];
  quizes: any[] = [];
  tasks: any[] = [];

  isLoading = signal(true);

  payload = new CourseForm();

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
        this.payload.description = course.description || '';

        this.tasks = content.tasks;
        this.quizes = content.quizes;
        this.lessons = content.lessons;

        this.isLoading.set(false);
      },
      error: (error) => {
        this.alertType = AlertTypes.error;
        this.alertMessage = error.message;

        this.isLoading.set(false);
      }
    })
  }
}
