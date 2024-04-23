import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JumbotronNotificationComponent } from '../../../../shared/components/jumbotron-notification/jumbotron-notification.component';
import { CollegeItemComponent } from '../../../../shared/components/college-item/college-item/college-item.component';
import { AlertComponent, AlertTypes } from '../../../../shared/components/alert/alert.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { fadeAnimation } from '../../../../shared/animations/fade/fade.animation';
import { College } from '../../../../shared/services/college/collage.model';

@Component({
  selector: 'app-list-college',
  standalone: true,
  imports: [JumbotronNotificationComponent, ButtonComponent, AlertComponent, CollegeItemComponent],
  templateUrl: './list-college.component.html',
  styleUrl: './list-college.component.scss',
  animations: [fadeAnimation]
})
export class ListCollegeComponent implements OnInit {
  collegeList = signal<College[]>(inject(ActivatedRoute).snapshot.data['colleges']);
  alertType = AlertTypes.error;
  messageError = "";

  ngOnInit() { }
}
