import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { PageThumbComponent } from '@shared/components/page-thumb/page-thumb.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { CollegeThumbComponent } from './college-thumb/college-thumb.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CollegeService } from '@shared/services/college/college.service';
import { ICourse } from '@shared/services/course/course.model';

import { CollegeFormComponent } from './college-form/college-form.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CollegeForm } from './model/college.model';
import { PageThumbLoaderComponent } from '@shared/components/loaders/page-thumb-loader/page-thumb-loader.component';

@Component({
    selector: 'app-college',
    imports: [
        ButtonBackComponent,
        ButtonComponent,
        AlertComponent,
        CollegeFormComponent,
        PageThumbComponent,
        CollegeListComponent,
        RouterLink,
        PageThumbLoaderComponent
    ],
    templateUrl: './college.component.html',
    styleUrl: './college.component.scss'
})
export class CollegeComponent implements OnInit {
  #collegeService = inject(CollegeService);
  #router = inject(ActivatedRoute);
  alertType = AlertTypes.success;
  payload = new CollegeForm();
  courses: ICourse[] = [];
  alertMessage = "";

  ngOnInit(): void {
    this.#router.paramMap.subscribe({
      next: params => {
        const collegeId = Number(params.get('id'));
        if (this.payload.name) return;
        this.getCollege(collegeId);
      }
    });
  }

  private getCollege(collegeId: string | number) {
    this.#collegeService.getCollages(collegeId).subscribe({
      next: (college) => {
        this.payload.secundaryColor = college.CollegeStyle[0].secundaryColor;
        this.payload.primaryColor = college.CollegeStyle[0].primaryColor;
        this.payload.thumb = college.CollegeStyle[0].thumb;
        this.payload.name = college.name;
        this.courses = college.Course;
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
