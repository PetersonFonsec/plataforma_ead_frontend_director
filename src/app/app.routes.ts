import { Routes } from '@angular/router';

import { NewPasswordComponent } from '@pages/auth/new-password/new-password.component';
import { unauthorizedGuard } from '@shared/guards/unauthorized/unauthorized.guard';
import { LoggedAreaComponent } from '@pages/logged-area/logged-area.component';
import { RegisterComponent } from '@pages/auth/register/register.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { WelcomeComponent } from '@pages/auth/welcome/welcome.component';
import { LoginComponent } from '@pages/auth/login/login.component';
import { AuthComponent } from '@pages/auth/auth.component';

import { CreatePostComponent } from '@pages/logged-area/pages/create-post/create-post.component';
import { ListPostComponent } from '@pages/logged-area/pages/list-post/list-post.component';
import { LessonComponent } from '@pages/logged-area/pages/lesson/lesson.component';

export const routes: Routes = [
  { path: '', redirectTo: '/entre', pathMatch: 'full' },
  {
    path: 'entre',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
        data: { animation: 'WelcomePage' },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'LoginPage' }
      },
      {
        path: 'cadastrar',
        component: RegisterComponent,
        data: { animation: 'RegisterPage' }
      },
      {
        path: 'nova-senha/:token',
        component: NewPasswordComponent,
        data: { animation: 'NewPassword' }
      },
    ]
  },
  {
    path: 'area-logada',
    component: LoggedAreaComponent,
    canActivate: [unauthorizedGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('@pages/logged-area/pages/home/home.component').then(c => c.HomeComponent),
        data: { animation: 'home' },
      },
      {
        path: 'profile',
        loadComponent: () => import('@pages/logged-area/pages/profile/profile.component').then(c => c.ProfileComponent),
        data: { animation: 'profile' }
      },
      {
        path: 'create-college',
        loadComponent: () => import('@pages/logged-area/pages/create-college/create-college.component').then(c => c.CreateCollegeComponent),
        data: { animation: 'create-college' }
      },
      {
        path: 'list-college',
        loadComponent: () => import('@pages/logged-area/pages/list-college/list-college.component').then(c => c.ListCollegeComponent),
        data: { animation: 'list-college' },
      },
      {
        path: 'college/:id',
        loadComponent: () => import('@pages/logged-area/pages/college/college.component').then(c => c.CollegeComponent),
        data: { animation: 'college/:id' },
      },
      {
        path: 'college/:id/course',
        loadComponent: () => import('@pages/logged-area/pages/create-course/create-course.component').then(c => c.CreateCourseComponent),
        data: { animation: 'course' },
      },
      {
        path: 'course/:id',
        loadComponent: () => import('@pages/logged-area/pages/course/course.component').then(c => c.CourseComponent),
        data: { animation: 'course/:id' },
      },
      {
        path: 'course/:id/choice-task',
        loadComponent: () => import('@pages/logged-area/pages/task-choice/task-choice.component').then(c => c.TaskChoiceComponent),
        data: { animation: 'lesson' },
      },
      {
        path: 'course/:id/quiz',
        loadComponent: () => import('@pages/logged-area/pages/create-quiz/create-quiz.component').then(c => c.CreateQuizComponent),
        data: { animation: 'lesson' },
      },
      {
        path: 'course/:id/task',
        loadComponent: () => import('@pages/logged-area/pages/create-task/create-task.component').then(c => c.CreateTaskComponent),
        data: { animation: 'lesson' },
      },
      {
        path: 'course/:id/lesson',
        loadComponent: () => import('@pages/logged-area/pages/lesson/lesson.component').then(c => c.LessonComponent),
        data: { animation: 'lesson' },
      },
      {
        path: 'feed',
        loadComponent: () => import('@pages/logged-area/pages/list-post/list-post.component').then(c => c.ListPostComponent),
        data: { animation: 'publicacoes' }
      },
      {
        path: 'student',
        loadComponent: () => import('@pages/logged-area/pages/student/student.component').then(c => c.StudentComponent),
        data: { animation: 'student' },
      },
    ]
  },
  { path: 'recuperar-senha', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];
