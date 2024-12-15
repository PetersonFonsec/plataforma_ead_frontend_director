import { Component, input } from '@angular/core';

import { AvatarProfileComponent } from "../avatar-profile/avatar-profile.component";
import { IuserToAvatarPipe } from '@shared/pipes/iuserToAvatar/iuser-to-avatar.pipe';
import { IAvatarParans } from '../avatar/avatar.component';

export interface IPost extends IAvatarParans { }

@Component({
    selector: 'app-post',
    imports: [AvatarProfileComponent, IuserToAvatarPipe],
    templateUrl: './post.component.html',
    styleUrl: './post.component.scss'
})
export class PostComponent {
  readonly postParams = input.required<IPost>();
}
