import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-course-item',
    imports: [],
    templateUrl: './course-item.component.html',
    styleUrl: './course-item.component.scss'
})
export class CourseItemComponent {
  @Input() thumb = ""
}
