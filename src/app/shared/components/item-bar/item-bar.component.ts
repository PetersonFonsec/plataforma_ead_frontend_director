import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-item-bar',
    imports: [],
    templateUrl: './item-bar.component.html',
    styleUrl: './item-bar.component.scss'
})
export class ItemBarComponent {
  @Input() title = ''
  @Input() legend = ''
}
