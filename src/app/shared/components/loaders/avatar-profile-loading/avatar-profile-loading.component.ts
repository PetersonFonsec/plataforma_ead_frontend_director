import { Component } from '@angular/core';
import { AvatarLoaderComponent } from '../avatar-loader/avatar-loader.component';

@Component({
  selector: 'app-avatar-profile-loading',
  standalone: true,
  imports: [AvatarLoaderComponent],
  templateUrl: './avatar-profile-loading.component.html',
  styleUrl: './avatar-profile-loading.component.scss'
})
export class AvatarProfileLoadingComponent {

}
