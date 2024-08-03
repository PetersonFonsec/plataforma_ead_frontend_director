import { Component, Input } from '@angular/core';
import { AvatarSizeParam } from '@shared/components/avatar/avatar.component';

@Component({
  selector: 'app-avatar-loader',
  standalone: true,
  imports: [],
  templateUrl: './avatar-loader.component.html',
  styleUrl: './avatar-loader.component.scss'
})
export class AvatarLoaderComponent {
  @Input() size: AvatarSizeParam = AvatarSizeParam.small;
}
