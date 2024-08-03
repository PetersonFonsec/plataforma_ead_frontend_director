import { Component } from '@angular/core';
import { AvatarProfileLoadingComponent } from '../avatar-profile-loading/avatar-profile-loading.component';

@Component({
  selector: 'app-post-loading',
  standalone: true,
  imports: [AvatarProfileLoadingComponent],
  templateUrl: './post-loading.component.html',
  styleUrl: './post-loading.component.scss'
})
export class PostLoadingComponent {

}
