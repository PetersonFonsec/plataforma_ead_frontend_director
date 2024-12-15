import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JumbotronProfileComponent } from '@pages/logged-area/components/jumbotron-profile/jumbotron-profile.component';
import { AlertTypes } from '@shared/components/alert/alert.component';
import { AvatarComponent, AvatarSizeParam } from '@shared/components/avatar/avatar.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CalendarComponent } from '@shared/components/calendar/calendar.component';
import { CourseItemComponent } from '@shared/components/course-item/course-item.component';
import { PostLoadingComponent } from '@shared/components/loaders/post-loading/post-loading.component';
import { PostComponent } from '@shared/components/post/post.component';
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar.component';
import { TabComponent } from '@shared/components/tab/tab.component';
import { TabContentDirective, TabHeaderDirective, TabsComponent } from '@shared/components/tabs/tabs.component';
import { TimeLineComponent } from '@shared/components/time-line/time-line.component';
import { IuserToAvatarPipe } from '@shared/pipes/iuserToAvatar/iuser-to-avatar.pipe';
import { TrustHtmlPipe } from '@shared/pipes/trust-html/trust-html.pipe';
import { ICourse } from '@shared/services/course/course.model';
import { PostService } from '@shared/services/post/post.service';
import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';

@Component({
  selector: 'app-student',
  imports: [
    TabsComponent,
    TabComponent,
    TabContentDirective,
    TabHeaderDirective,
    RouterLink,
    JumbotronProfileComponent,
    ButtonComponent,
    PostLoadingComponent,
    PostComponent,
    AsyncPipe,
    TrustHtmlPipe,
    IuserToAvatarPipe,
    AvatarComponent,
    CourseItemComponent,
    ProgressBarComponent,
    CalendarComponent,
    TimeLineComponent
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
