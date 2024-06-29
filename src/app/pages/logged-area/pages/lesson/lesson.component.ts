import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component, inject } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';

import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';
import { InputRadioComponent } from '@shared/components/input-radio/input-radio.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { LessonCreateRequest } from '@shared/services/lesson/lesson.model';
import { LessonService } from '@shared/services/lesson/lesson.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';

export class LessonForm implements LessonCreateRequest {
  content: any = "";
  description = "";
  urlContent = "";
  courseId = 0;
  title = "";
  video = null;
}

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [
    QuillEditorComponent,
    ReactiveFormsModule,
    InputRadioComponent,
    ButtonComponent,
    FormsModule,
    InputTextComponent,
    InputUploadComponent,
    AlertComponent
  ],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {
  #sanitizer = inject(DomSanitizer);
  #lesson = inject(LessonService);
  alertType = AlertTypes.success;
  payload = new LessonForm();
  alertMessage = "";
  videoType = "";

  byPassHTML(html: string) {
    return
  }

  create() {
    const payload = this.payload;
    if (payload.content) {
      payload.content = this.#sanitizer.bypassSecurityTrustHtml(payload.content);
    }

    this.#lesson.create(payload).subscribe({
      next: () => {

      },
      error: (error: HttpErrorResponse) => {
        this.alertType = AlertTypes.error;
        this.alertMessage = error.error.message;
      }
    })
  }
}
