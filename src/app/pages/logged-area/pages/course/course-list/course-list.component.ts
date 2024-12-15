import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemBarComponent } from '@shared/components/item-bar/item-bar.component';

@Component({
    selector: 'app-course-list',
    imports: [
        ItemBarComponent,
        RouterLink
    ],
    templateUrl: './course-list.component.html',
    styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  readonly isLoading = input(true);
  readonly itens = input<any>([]);

  readonly name = input("");
}
