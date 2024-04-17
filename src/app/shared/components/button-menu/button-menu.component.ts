import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.scss'
})
export class ButtonMenuComponent {
  @Input() isOpen = false
}
