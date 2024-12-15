import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarLoaderComponent } from '../loaders/avatar-loader/avatar-loader.component';

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
    imports: [NgClass, AvatarLoaderComponent],
    templateUrl: './avatar.component.html',
    styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input({ required: true }) content!: IAvatarParans;
  @Input() size: AvatarSizeParam = AvatarSizeParam.small;
}
