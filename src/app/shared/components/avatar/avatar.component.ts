import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() src = "";
  @Input() alt = "";
  @Input() id = "";
  @Input() loading = true;
  @Input() size: "sm" | "md" | "lg" = "sm";
}
