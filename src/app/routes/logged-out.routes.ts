import { Routes } from '@angular/router';

import { NewPasswordComponent } from '@pages/auth/new-password/new-password.component';
import { RegisterComponent } from '@pages/auth/register/register.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { WelcomeComponent } from '@pages/auth/welcome/welcome.component';
import { LoginComponent } from '@pages/auth/login/login.component';
import { ForgotPasswordComponent } from '@pages/auth/forgot-password/forgot-password.component';

const PROJECT_NAME = "Odin";

/**
 * @description Aqui vai ter apenas as rotas visiveis para os usuarios que tiverem o perfil de estudantes "STUDENT"
 */
export const loggedOutRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    title: `Seja bem vindo - ${PROJECT_NAME}`,
    data: { animation: 'WelcomePage' },
  },
  {
    path: 'login',
    component: LoginComponent,
    title: `Acesse sua conta - ${PROJECT_NAME}`,
    data: { animation: 'LoginPage' }
  },
  {
    path: 'cadastrar',
    component: RegisterComponent,
    title: `Crie uma conta - ${PROJECT_NAME}`,
    data: { animation: 'RegisterPage' }
  },
  {
    path: 'nova-senha/:token',
    component: NewPasswordComponent,
    title: `Cadastre uma nova senha - ${PROJECT_NAME}`,
    data: { animation: 'NewPassword' }
  },
  {
    path: 'recuperar-senha',
    component: ForgotPasswordComponent,
    title: `Recuperar a senha - ${PROJECT_NAME}`,
    data: { animation: 'recov' }
  },
];
