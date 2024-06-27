import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [QuillEditorComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {
  textFormat = ''
  form: FormGroup = this.fb.group({
    html: new FormControl('<div>test</div><ul><li>1</li><li class="ql-indent-1">1-1</li><li>2</li><ol><li>numbered</li><li class="ql-indent-1">numbered-1</li></ol></ul><div><br></div>'),
    matQuillHtml: new FormControl('<div>test</div><ul><li>1</li><li class="ql-indent-1">1-1</li><li>2</li><ol><li>numbered</li><li class="ql-indent-1">numbered-1</li></ol></ul><div><br></div>')
  })

  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) { }

  ngOnInit() {
  }

  byPassHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }
}
