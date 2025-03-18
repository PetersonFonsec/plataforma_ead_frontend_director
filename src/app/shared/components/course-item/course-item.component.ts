import { Component, input } from '@angular/core';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.scss'
})
export class CourseItemComponent {
  readonly thumb = input("");
}
