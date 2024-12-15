import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-date-item',
    imports: [CommonModule],
    templateUrl: './date-item.component.html',
    styleUrl: './date-item.component.scss'
})
export class DateItemComponent {
  @Input() date!: string;
}
