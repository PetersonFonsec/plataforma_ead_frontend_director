import { Component, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';
import { IuserToAvatarPipe } from '@shared/pipes/iuserToAvatar/iuser-to-avatar.pipe';

import { ButtonMenuComponent } from '../button-menu/button-menu.component';
import { AsideMenuComponent } from '../aside-menu/aside-menu.component';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'logged-page',
  standalone: true,
  imports: [
    AsideMenuComponent,
    ButtonMenuComponent,
    NgClass,
    AvatarComponent,
    CommonModule,
    IuserToAvatarPipe
  ],
  templateUrl: './logged-page.component.html',
  styleUrl: './logged-page.component.scss'
})
export class LoggedPageComponent {
  #userService = inject(UserLoggedService);
  userLogged = this.#userService.user();
  open = false;

  logout() {
    this.#userService.logout()
  }
}
