import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JumbotronProfileComponent } from '@pages/logged-area/components/jumbotron-profile/jumbotron-profile.component';
import { JumbotronWellcomeComponent } from '@pages/logged-area/components/jumbotron-wellcome/jumbotron-wellcome.component';
import { AlertTypes } from '@shared/components/alert/alert.component';
import { AvatarProfileComponent } from '@shared/components/avatar-profile/avatar-profile.component';
import { AvatarComponent, AvatarSizeParam } from '@shared/components/avatar/avatar.component';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CourseItemComponent } from '@shared/components/course-item/course-item.component';
import { JumbotronNotificationComponent } from '@shared/components/jumbotron-notification/jumbotron-notification.component';
import { PostLoadingComponent } from '@shared/components/loaders/post-loading/post-loading.component';
import { PostComponent } from '@shared/components/post/post.component';
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar.component';
import { TabComponent } from '@shared/components/tab/tab.component';
import { TabContentDirective, TabHeaderDirective, TabsComponent } from '@shared/components/tabs/tabs.component';
import { IuserToAvatarPipe } from '@shared/pipes/iuserToAvatar/iuser-to-avatar.pipe';
import { TrustHtmlPipe } from '@shared/pipes/trust-html/trust-html.pipe';
import { CollegeService } from '@shared/services/college/college.service';
import { ICourse } from '@shared/services/course/course.model';
import { PostService } from '@shared/services/post/post.service';
import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    TabsComponent,
    TabComponent,
    TabContentDirective,
    TabHeaderDirective,
    RouterLink,
    JumbotronWellcomeComponent,
    JumbotronProfileComponent,
    JumbotronNotificationComponent,
    ButtonComponent,
    PostLoadingComponent,
    PostComponent,
    AsyncPipe,
    TrustHtmlPipe,
    AvatarProfileComponent,
    IuserToAvatarPipe,
    AvatarComponent,
    CourseItemComponent,
    ProgressBarComponent
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  #postService = inject(PostService);
  #userService = inject(UserLoggedService);

  posts = this.#postService.list();
  userLogged = this.#userService.user();

  avatarSize = AvatarSizeParam.large;
  courses: ICourse[] = [];

  alertType = AlertTypes.success;
  alertMessage = "";

  ngOnInit(): void {
    const course: ICourse = {
      "id": 2,
      "createdAt": "2024-09-16T19:15:02.315Z",
      "updatedAt": "2024-09-16T19:15:02.315Z",
      "name": "Conceitos de computação I",
      "thumb": "https://imagedelivery.net/Bpbv9d8J9NqFhm--zUdxEA/2bc5647a-6236-4cc6-57e0-d2b6a267fb00/public",
      "collegeId": 4,
      "content": ""
    }

    this.courses = Array(20).fill(course)
  }
}
