import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { WelcomeComponent } from './pages/auth/welcome/welcome.component';

export const routes: Routes = [
  {
    path: 'entre',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'cadastrar',
        component: RegisterComponent
      },
    ]
  },
  { path: '', redirectTo: '/entre', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
