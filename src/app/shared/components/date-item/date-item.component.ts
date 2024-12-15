import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-date-item',
    imports: [CommonModule],
    templateUrl: './date-item.component.html',
    styleUrl: './date-item.component.scss'
})
export class DateItemComponent {
  readonly date = input.required<string>();
}
