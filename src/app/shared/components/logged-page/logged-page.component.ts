import { Component, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

import { AvatarComponent } from '../avatar/avatar.component';
import { AsideMenuComponent } from '../aside-menu/aside-menu.component';
import { ButtonMenuComponent } from '../button-menu/button-menu.component';
import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';
import { Router } from '@angular/router';
@Component({
  selector: 'logged-page',
  standalone: true,
  imports: [AsideMenuComponent, ButtonMenuComponent, NgClass, AvatarComponent, CommonModule],
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
