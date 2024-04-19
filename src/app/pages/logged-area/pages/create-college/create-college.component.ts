import { Component } from '@angular/core';
import { JumbotronNotificationComponent } from '../../../../shared/components/jumbotron-notification/jumbotron-notification.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-create-college',
  standalone: true,
  imports: [JumbotronNotificationComponent, ButtonComponent],
  templateUrl: './create-college.component.html',
  styleUrl: './create-college.component.scss'
})
export class CreateCollegeComponent {

}
