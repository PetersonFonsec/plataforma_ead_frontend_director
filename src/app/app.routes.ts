import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { WelcomeComponent } from './pages/auth/welcome/welcome.component';
import { NewPasswordComponent } from './pages/auth/new-password/new-password.component';

export const routes: Routes = [
  {
    path: 'entre',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
        data: { animation: 'WelcomePage' }
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
  { path: '', redirectTo: '/entre', pathMatch: 'full' },
  { path: 'recuperar-senha', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];
