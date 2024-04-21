import { Component, inject } from '@angular/core';
import { JumbotronWellcomeComponent } from '../../components/jumbotron-wellcome/jumbotron-wellcome.component';
import { JumbotronProfileComponent } from '../../components/jumbotron-profile/jumbotron-profile.component';
import { JumbotronNotificationComponent } from '../../../../shared/components/jumbotron-notification/jumbotron-notification.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    JumbotronWellcomeComponent,
    JumbotronProfileComponent,
    JumbotronNotificationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
