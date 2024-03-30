import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export enum AvatarSizeParam {
  "small" = "sm",
  "medium" = "md",
  "large" = "lg"
}
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
  @Input() size: AvatarSizeParam = AvatarSizeParam.small;
}
