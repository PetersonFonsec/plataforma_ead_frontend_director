import { Component, Input } from '@angular/core';

import { AvatarProfileComponent } from "../avatar-profile/avatar-profile.component";
import { IuserToAvatarPipe } from '@shared/pipes/iuser-to-avatar.pipe';
import { IAvatarParans } from '../avatar/avatar.component';

export interface IPost extends IAvatarParans { }

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [AvatarProfileComponent, IuserToAvatarPipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input({ required: true }) postParams!: IPost;
}
