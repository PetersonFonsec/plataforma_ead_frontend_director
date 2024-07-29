import { Component, Input } from '@angular/core';
import { AvatarComponent, IAvatarParans } from '../avatar/avatar.component';

@Component({
  selector: 'app-avatar-profile',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './avatar-profile.component.html',
  styleUrl: './avatar-profile.component.scss'
})
export class AvatarProfileComponent {
  @Input({ required: true }) content!: IAvatarParans;
  @Input() description = '';
}
