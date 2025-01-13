import { Routes } from '@angular/router';

const PROJECT_NAME = "Odin";

/**
 * @description Aqui vai ter apenas as rotas do backoffice apenas pessoas com o perfil de administrador podem acessar
 * perfils: TEACHER, DIRECTOR, ADMIN
 */
export const backOfficeRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: `Seja bem vindo - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/home/home.component').then(c => c.HomeComponent),
    data: { animation: 'home' },
  },
  {
    path: 'profile',
    title: `Perfil - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/profile/profile.component').then(c => c.ProfileComponent),
    data: { animation: 'profile' }
  },
  {
    path: 'create-college',
    title: `Cadastro de Universidade - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/create-college/create-college.component').then(c => c.CreateCollegeComponent),
    data: { animation: 'create-college' }
  },
  {
    path: 'list-college',
    title: `Universidades - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/list-college/list-college.component').then(c => c.ListCollegeComponent),
    data: { animation: 'list-college' },
  },
  {
    path: 'college/:id',
    title: `Dados da Universidade - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/college/college.component').then(c => c.CollegeComponent),
    data: { animation: 'college/:id' },
  },
  {
    path: 'college/:id/course',
    title: `Cursos da Universidade - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/create-course/create-course.component').then(c => c.CreateCourseComponent),
    data: { animation: 'course' },
  },
  {
    path: 'course/:id',
    title: `Dados do Curso - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/course/course.component').then(c => c.CourseComponent),
    data: { animation: 'course/:id' },
  },
  {
    path: 'course/:id/choice-task',
    title: `Escolha o tipo de atividade - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/task-choice/task-choice.component').then(c => c.TaskChoiceComponent),
    data: { animation: 'lesson' },
  },
  {
    path: 'course/:id/quiz',
    title: `Cadastro de Quiz - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/create-quiz/create-quiz.component').then(c => c.CreateQuizComponent),
    data: { animation: 'lesson' },
  },
  {
    path: 'course/:id/task',
    title: `Cadastro de Tarefa - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/create-task/create-task.component').then(c => c.CreateTaskComponent),
    data: { animation: 'lesson' },
  },
  {
    path: 'course/:id/lesson',
    title: `Cadastro de Aula - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/lesson/lesson.component').then(c => c.LessonComponent),
    data: { animation: 'lesson' },
  },
  {
    path: 'course/:id/lesson/:lessonId',
    title: `Dados sobre a Aula - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/lesson/lesson.component').then(c => c.LessonComponent),
    data: { animation: 'lesson' },
  },
  {
    path: 'feed',
    title: `Ultimas Publicações - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/list-post/list-post.component').then(c => c.ListPostComponent),
    data: { animation: 'publicacoes' }
  },
  {
    path: 'lesson/:id',
    title: `Dados sobre a Aula - ${PROJECT_NAME}`,
    loadComponent: () => import('@pages/logged-area/pages/lesson/single/single.component').then(c => c.SingleComponent),
    data: { animation: 'lessonSingle' },
  },
];
