import { Component, input } from '@angular/core';
import { AvatarSizeParam } from '@shared/components/avatar/avatar.component';

@Component({
    selector: 'app-avatar-loader',
    imports: [],
    templateUrl: './avatar-loader.component.html',
    styleUrl: './avatar-loader.component.scss'
})
export class AvatarLoaderComponent {
  readonly size = input<AvatarSizeParam>(AvatarSizeParam.small);
}
