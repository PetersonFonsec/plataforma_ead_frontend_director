import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

import { AsideMenuComponent } from '../aside-menu/aside-menu.component';
import { ButtonMenuComponent } from '../button-menu/button-menu.component';
import { AvatarComponent } from '../avatar/avatar.component';
@Component({
  selector: 'logged-page',
  standalone: true,
  imports: [AsideMenuComponent, ButtonMenuComponent, NgClass, AvatarComponent],
  templateUrl: './logged-page.component.html',
  styleUrl: './logged-page.component.scss'
})
export class LoggedPageComponent {
  open = false
}