import { Component, OnInit, inject, signal } from '@angular/core';
import { JumbotronNotificationComponent } from '../../../../shared/components/jumbotron-notification/jumbotron-notification.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CollegeService } from '../../../../shared/services/college/college.service';
import { College } from '../../../../shared/services/college/collage.model';
import { AlertComponent, AlertTypes } from '../../../../shared/components/alert/alert.component';
import { CollegeItemComponent } from '../../../../shared/components/college-item/college-item/college-item.component';
import { fadeAnimation } from '../../../../shared/animations/fade/fade.animation';

@Component({
  selector: 'app-list-college',
  standalone: true,
  imports: [JumbotronNotificationComponent, ButtonComponent, AlertComponent, CollegeItemComponent],
  templateUrl: './list-college.component.html',
  styleUrl: './list-college.component.scss',
  animations: [fadeAnimation]
})
export class ListCollegeComponent implements OnInit {
  #collegeService = inject(CollegeService);
  collegeList = signal<College[]>([]);
  alertType = AlertTypes.error;
  messageError = "";

  ngOnInit() {
    this.getCollegeList();
  }

  private getCollegeList() {
    this.#collegeService.getCollages().subscribe({
      next: (response) => {
        this.collegeList.update(() => response)
      },
      error: (error) => {
        this.messageError = error.error.message;
      }
    })
  }
}
