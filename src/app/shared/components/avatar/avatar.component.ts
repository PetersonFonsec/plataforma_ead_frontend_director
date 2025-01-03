import { Component, input } from '@angular/core';

import { AvatarLoaderComponent } from '../loaders/avatar-loader/avatar-loader.component';
import { TrustHtmlPipe } from '@shared/pipes/trust-html/trust-html.pipe';
import { TrustUrlPipe } from '@shared/pipes/trust-url/trust-url.pipe';

export interface IAvatarParans {
  src: string
  name: string
}

export enum AvatarSizeParam {
  "small" = "sm",
  "medium" = "md",
  "large" = "lg"
}
@Component({
  selector: 'app-avatar',
  imports: [AvatarLoaderComponent, TrustUrlPipe],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  readonly content = input.required<IAvatarParans>();
  readonly size = input<AvatarSizeParam>(AvatarSizeParam.small);
}
