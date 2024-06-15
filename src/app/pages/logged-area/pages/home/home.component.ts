import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { IUserLogged } from '@shared/services/user-logged/user-logged.model';
import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';

import { JumbotronNotificationComponent } from '@shared/components/jumbotron-notification/jumbotron-notification.component';
import { JumbotronWellcomeComponent } from '../../components/jumbotron-wellcome/jumbotron-wellcome.component';
import { JumbotronProfileComponent } from '../../components/jumbotron-profile/jumbotron-profile.component';
import { CollegeItemComponent } from '@shared/components/college-item/college-item/college-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    JumbotronWellcomeComponent,
    JumbotronProfileComponent,
    JumbotronNotificationComponent,
    CollegeItemComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  userService = inject(UserLoggedService);
  userLogged = this.userService.user();
}
