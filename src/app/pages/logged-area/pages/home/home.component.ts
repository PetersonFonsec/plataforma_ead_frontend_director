import { Component } from '@angular/core';
import { JumbotronWellcomeComponent } from '../../components/jumbotron-wellcome/jumbotron-wellcome.component';
import { JumbotronProfileComponent } from '../../components/jumbotron-profile/jumbotron-profile.component';
import { JumbotronNotificationComponent } from '../../../../shared/components/jumbotron-notification/jumbotron-notification.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JumbotronWellcomeComponent, JumbotronProfileComponent, JumbotronNotificationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}