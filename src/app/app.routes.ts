import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { WelcomeComponent } from './pages/auth/welcome/welcome.component';
import { NewPasswordComponent } from './pages/auth/new-password/new-password.component';
import { LoggedAreaComponent } from './pages/logged-area/logged-area.component';

export const routes: Routes = [
  { path: '', redirectTo: '/entre', pathMatch: 'full' },
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
  {
    path: 'area-logada',
    component: LoggedAreaComponent,
    children: [
      {
        path: 'home',
        component: NewPasswordComponent,
        data: { animation: 'home' }
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
