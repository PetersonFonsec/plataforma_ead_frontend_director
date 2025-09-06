import { Component, input } from '@angular/core';

import { AvatarProfileComponent } from "../avatar-profile/avatar-profile.component";
import { IAvatarParans } from '../avatar/avatar.component';

export interface IPost extends IAvatarParans { }

@Component({
  selector: 'app-post',
  imports: [AvatarProfileComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  readonly postParams = input<IPost>();
}
