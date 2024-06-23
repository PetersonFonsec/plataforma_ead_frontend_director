import { Routes } from '@angular/router';

import { CreateCollegeComponent } from '@pages/logged-area/pages/create-college/create-college.component';
import { ListCollegeComponent } from '@pages/logged-area/pages/list-college/list-college.component';
import { NewPasswordComponent } from '@pages/auth/new-password/new-password.component';
import { CollegeComponent } from '@pages/logged-area/pages/college/college.component';
import { ProfileComponent } from '@pages/logged-area/pages/profile/profile.component';
import { LoggedAreaComponent } from '@pages/logged-area/logged-area.component';
import { HomeComponent } from '@pages/logged-area/pages/home/home.component';
import { RegisterComponent } from '@pages/auth/register/register.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { WelcomeComponent } from '@pages/auth/welcome/welcome.component';
import { LoginComponent } from '@pages/auth/login/login.component';
import { AuthComponent } from '@pages/auth/auth.component';
import { unauthorizedGuard } from '@shared/guards/unauthorized/unauthorized.guard';
import { CourseComponent } from '@pages/logged-area/pages/course/course.component';
import { CreateCourseComponent } from '@pages/logged-area/pages/create-course/create-course.component';
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
        component: HomeComponent,
        data: { animation: 'home' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { animation: 'profile' }
      },
      {
        path: 'create-college',
        component: CreateCollegeComponent,
        data: { animation: 'create-college' }
      },
      {
        path: 'list-college',
        component: ListCollegeComponent,
        data: { animation: 'list-college' },
      },
      {
        path: 'college/:id',
        component: CollegeComponent,
        data: { animation: 'college/:id' },
      },
      {
        path: 'college/:id/course',
        component: CreateCourseComponent,
        data: { animation: 'course' },
      },
      {
        path: 'course/:id',
        component: CourseComponent,
        data: { animation: 'course/:id' },
      },
      {
        path: 'lesson',
        component: LessonComponent,
        data: { animation: 'lesson' },
      },
      {
        path: 'publicacoes',
        component: NewPasswordComponent,
        data: { animation: 'publicacoes' }
      },
      {
        path: 'materias',
        component: NewPasswordComponent,
        data: { animation: 'materias' }
      },
      {
        path: 'materias/:id',
        component: NewPasswordComponent,
        data: { animation: 'materias' }
      },
      {
        path: 'atividades',
        component: NewPasswordComponent,
        data: { animation: 'atividades' }
      },
    ]
  },
  { path: 'recuperar-senha', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];
