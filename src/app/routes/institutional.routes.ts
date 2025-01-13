import { WelcomeComponent } from '@pages/auth/welcome/welcome.component';
import { LoginComponent } from '@pages/auth/login/login.component';
import { Routes } from '@angular/router';

const PROJECT_NAME = "Odin";

/**
 * @description Aqui vai ter apenas as rotas do "institucionais" exemplo quem somos, contato, etc
 * essas telas quais quer perfis podem acessar
 */
export const institutionalRoutes: Routes = [
  {
    path: 'about',
    component: WelcomeComponent,
    title: `Quem somos - ${PROJECT_NAME}`,
    data: { animation: 'Quem somos' },
  },
  {
    path: `faq`,
    component: LoginComponent,
    title: `Perguntas Frequentes - ${PROJECT_NAME}`,
    data: { animation: 'LoginPage' }
  },
  {
    path: 'suport',
    component: WelcomeComponent,
    title: `Ajuda - ${PROJECT_NAME}`,
    data: { animation: 'Ajuda' },
  },
];
