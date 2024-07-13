import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-bar',
  standalone: true,
  imports: [],
  templateUrl: './item-bar.component.html',
  styleUrl: './item-bar.component.scss'
})
export class ItemBarComponent {
  @Input() title = ''
  @Input() legend = ''
}
