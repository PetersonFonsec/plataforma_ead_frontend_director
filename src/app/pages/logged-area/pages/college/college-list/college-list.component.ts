import { Component } from '@angular/core';
import { CourseItemComponent } from '@shared/components/course-item/course-item.component';

@Component({
  selector: 'app-college-list',
  standalone: true,
  imports: [CourseItemComponent],
  templateUrl: './college-list.component.html',
  styleUrl: './college-list.component.scss'
})
export class CollegeListComponent {

}
