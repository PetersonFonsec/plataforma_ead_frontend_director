import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUserLogged } from '@shared/services/user-logged/user-logged.model';
import { menus } from '@shared/data/menus';

import { AvatarProfileComponent } from '../avatar-profile/avatar-profile.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [AvatarProfileComponent, RouterLink],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss'
})
export class AsideMenuComponent implements OnInit {
  @Input() userLogged?: IUserLogged;
  @Output() userLogout = new EventEmitter();
  menus: any;

  ngOnInit(): void {
    const role = this.userLogged?.user.role;
    if (role) this.menus = menus[role];
  }

  logout() {
    this.userLogout.emit()
  }
}
