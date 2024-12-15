import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { InputRadioComponent } from '@shared/components/input-radio/input-radio.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { QuizCreateRequest } from '@shared/services/quiz/quiz.model';
import { QuizService } from '@shared/services/quiz/quiz.service';

@Component({
    selector: 'app-create-quiz',
    imports: [
        ButtonBackComponent,
        ButtonComponent,
        RouterLink,
        FormsModule,
        InputTextComponent,
        InputRadioComponent,
        AlertComponent,
        CommonModule
    ],
    templateUrl: './create-quiz.component.html',
    styleUrl: './create-quiz.component.scss'
})
export class CreateQuizComponent implements OnInit {
  #activatedRouter = inject(ActivatedRoute);
  #quizService = inject(QuizService);
  #router = inject(Router);
  payload: QuizCreateRequest = { name: "" } as any;
  alertType = AlertTypes.info;
  options: any[] = [];
  alertMessage = "";
  correctOptions = "0"

  ngOnInit(): void {
    this.#activatedRouter.paramMap.subscribe({
      next: params => {
        this.payload.courseId = Number(params.get('id'));
      }
    });
  }

  createOption() {
    return { title: '', correctOptions: false }
  }

  addOption() {
    if (this.options.length < 5) this.options.push(this.createOption());
  }

  updateOptions(index: number) {
    this.options.forEach((option, i) => {
      option.correctOptions = i === index;
    });
  }

  submit() {
    this.payload.quizOptions = this.options;
    this.#quizService.create(this.payload).subscribe({
      next: async (college) => {
        await this.#router.navigateByUrl(`/area-logada/course/${this.payload.courseId}`);
      },
      error: (error: HttpErrorResponse) => {
        this.alertType = AlertTypes.error;
        this.alertMessage = error.error.message;
      }
    });
  }
}
