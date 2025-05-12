import { Component, OnInit, input, output } from '@angular/core';

import { AvatarProfileComponent } from '../avatar-profile/avatar-profile.component';

import { IuserToAvatarPipe } from '@shared/pipes/iuserToAvatar/iuser-to-avatar.pipe';
import { IUserLogged } from '@shared/services/user-logged/user-logged.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Utils } from '@shared/services/utils/utils.service';
import { IMenu, menus } from '@shared/data/menus';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [AvatarProfileComponent, RouterLink, IuserToAvatarPipe, RouterLinkActive, CommonModule],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss'
})
export class AsideMenuComponent implements OnInit {
  readonly userLogged = input.required<IUserLogged>();
  readonly userLogout = output();

  menusInstitucional = menus.INSTITUTIONAL;
  menus: IMenu[] = [];

  ngOnInit(): void {
    const role = this.userLogged().user.role;
    if (role) this.menus = Utils.getMenusByRole(role);
  }

  logout() {
    this.userLogout.emit()
  }
}
