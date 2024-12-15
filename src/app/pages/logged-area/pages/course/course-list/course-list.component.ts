import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemBarComponent } from '@shared/components/item-bar/item-bar.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    ItemBarComponent,
    RouterLink
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  @Input() isLoading = true
  @Input() itens: any = []

  @Input() name = ""
}
