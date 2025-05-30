import { Routes } from '@angular/router';

import { unauthorizedGuard } from '@shared/guards/unauthorized/unauthorized.guard';
import { LoggedAreaComponent } from '@pages/logged-area/logged-area.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { AuthComponent } from '@pages/auth/auth.component';

import { institutionalRoutes } from './routes/institutional.routes';
import { studentPortalRoutes } from './routes/students.routes';
import { backOfficeRoutes } from './routes/backoffice.routes';
import { loggedOutRoutes } from './routes/logged-out.routes';
import { permissionByRoleGuard } from '@shared/guards/permission-by-role/permission-by-role.guard';
import { Roles } from '@shared/enums/roles.enum';
import { userLoggedGuard } from '@shared/guards/userLogged/user-logged.guard';
import { UrlBase } from '@shared/data/base-url';

export const routes: Routes = [
  { path: '', redirectTo: '/authenticate', pathMatch: 'full' },
  {
    path: UrlBase.AUTHENTICATE,
    component: AuthComponent,
    canActivate: [userLoggedGuard],
    children: loggedOutRoutes
  },
  {
    path: UrlBase.INSTITUTIONAL,
    component: LoggedAreaComponent,
    children: institutionalRoutes
  },
  {
    path: UrlBase.BACKOFFICE,
    component: LoggedAreaComponent,
    canActivate: [unauthorizedGuard, permissionByRoleGuard([Roles.ADMIN, Roles.DIRECTOR, Roles.TEACHER])],
    children: backOfficeRoutes
  },
  {
    path: UrlBase.STUDENT,
    component: LoggedAreaComponent,
    canActivate: [unauthorizedGuard, permissionByRoleGuard([Roles.STUDENT])],
    children: studentPortalRoutes
  },
  { path: '**', component: NotFoundComponent }
];
