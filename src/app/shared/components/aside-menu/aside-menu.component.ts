import { Component } from '@angular/core';
import { AvatarProfileComponent } from '../avatar-profile/avatar-profile.component';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [AvatarProfileComponent],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss'
})
export class AsideMenuComponent {

}
