import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';

import { JumbotronNotificationComponent } from '@shared/components/jumbotron-notification/jumbotron-notification.component';
import { JumbotronWellcomeComponent } from '../../components/jumbotron-wellcome/jumbotron-wellcome.component';
import { JumbotronProfileComponent } from '../../components/jumbotron-profile/jumbotron-profile.component';
import { CollegeItemComponent } from '@shared/components/college-item/college-item/college-item.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { fadeAnimation } from '@shared/animations/fade/fade.animation';
import { CollegeItemLoaderComponent } from '@shared/components/loaders/college-item-loader/college-item-loader.component';
import { AvatarComponent, AvatarSizeParam } from '@shared/components/avatar/avatar.component';
import { IuserToAvatarPipe } from '@shared/pipes/iuserToAvatar/iuser-to-avatar.pipe';
import { Roles } from '@shared/enums/roles.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    JumbotronWellcomeComponent,
    JumbotronProfileComponent,
    CollegeItemComponent,
    ButtonComponent,
    CollegeItemLoaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  userService = inject(UserLoggedService);
  userLogged = this.userService.user();
  router = inject(Router);

  async ngOnInit(): Promise<void> {
    console.log(this.userLogged)
    if (this.userLogged.user.role === Roles.STUDENT) {
      await this.router.navigateByUrl("/area-logada/student");
    }
  }
}
