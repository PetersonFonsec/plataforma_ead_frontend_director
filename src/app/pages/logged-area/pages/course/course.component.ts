import { Component } from '@angular/core';
import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { SelectComponent } from '@shared/components/select/select.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [ButtonComponent, SelectComponent, InputUploadComponent, InputTextComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

}
