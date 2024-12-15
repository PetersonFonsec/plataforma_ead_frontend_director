import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { JumbotronNotificationComponent } from '@shared/components/jumbotron-notification/jumbotron-notification.component';
import { CollegeItemComponent } from '@shared/components/college-item/college-item/college-item.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { fadeAnimation } from '@shared/animations/fade/fade.animation';
import { College } from '@shared/services/college/collage.model';
import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';

@Component({
    selector: 'app-list-college',
    imports: [JumbotronNotificationComponent, ButtonComponent, AlertComponent, CollegeItemComponent, RouterModule],
    templateUrl: './list-college.component.html',
    styleUrl: './list-college.component.scss',
    animations: [fadeAnimation]
})
export class ListCollegeComponent implements OnInit {
  userService = inject(UserLoggedService);
  userLogged = this.userService.user();
  alertType = AlertTypes.error;
  messageError = "";

  ngOnInit() { }
}
