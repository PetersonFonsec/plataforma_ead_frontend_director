import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { QuillEditorComponent } from 'ngx-quill';
import { Component, inject } from '@angular/core';

import { InputRadioComponent } from '@shared/components/input-radio/input-radio.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { LessonCreateRequest } from '@shared/services/lesson/lesson.model';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';

export class LessonForm implements LessonCreateRequest {
  description = "";
  urlContent = "";
  courseId = 0;
  content = "";
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

    InputUploadComponent
  ],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {
  sanitizer = inject(DomSanitizer);
  payload = new LessonForm();
  videoType = '';

  byPassHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }
}
