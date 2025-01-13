import { Routes } from '@angular/router';

const PROJECT_NAME = "Odin";

/**
 * @description Aqui vai ter apenas as rotas visiveis para os usuarios que tiverem o perfil de estudantes "STUDENT"
 */
export const studentPortalRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: `Seja bem vindo - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/student/student.component').then(c => c.StudentComponent),
  },
  {
    path: 'profile',
    title: `Perfil - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/profile/profile.component').then(c => c.ProfileComponent),
    data: { animation: 'profile' }
  },
  {
    path: 'feed',
    title: `Ultimas publicações - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/list-post/list-post.component').then(c => c.ListPostComponent),
    data: { animation: 'publicacoes' }
  },
  {
    path: 'lesson/:id',
    title: `Aula - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/lesson/single/single.component').then(c => c.SingleComponent),
    data: { animation: 'lessonSingle' },
  }
];
