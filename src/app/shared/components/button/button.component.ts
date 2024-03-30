import { Component, Input } from '@angular/core';

export enum ButtonColors {
  "primary" = "primary",
  "secundary" = "secundary"
}
export enum ButtonSize {
  "small" = "small",
  "medium" = "medium"
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() color: ButtonColors = ButtonColors.primary;
  @Input() size: ButtonSize = ButtonSize.medium;
  @Input() disabled = false;
}
