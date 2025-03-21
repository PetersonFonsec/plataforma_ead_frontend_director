import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CourseItemComponent } from '@shared/components/course-item/course-item.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ICourse } from '@shared/services/course/course.model';

@Component({
  selector: 'app-college-list',
  standalone: true,
  imports: [CourseItemComponent, ButtonComponent, RouterModule],
  templateUrl: './college-list.component.html',
  styleUrl: './college-list.component.scss'
})
export class CollegeListComponent {
  readonly courses = input<ICourse[]>([]);
}
