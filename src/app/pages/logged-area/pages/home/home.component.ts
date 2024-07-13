import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';

import { JumbotronNotificationComponent } from '@shared/components/jumbotron-notification/jumbotron-notification.component';
import { JumbotronWellcomeComponent } from '../../components/jumbotron-wellcome/jumbotron-wellcome.component';
import { JumbotronProfileComponent } from '../../components/jumbotron-profile/jumbotron-profile.component';
import { CollegeItemComponent } from '@shared/components/college-item/college-item/college-item.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { fadeAnimation } from '@shared/animations/fade/fade.animation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    JumbotronWellcomeComponent,
    JumbotronProfileComponent,
    JumbotronNotificationComponent,
    CollegeItemComponent,
    ButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  userService = inject(UserLoggedService);
  userLogged = this.userService.user();

  ngOnInit(): void {
    console.log(this.userLogged)
  }
}
