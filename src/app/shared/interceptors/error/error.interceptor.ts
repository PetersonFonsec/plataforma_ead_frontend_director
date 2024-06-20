import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';

import { TokenService } from '@shared/services/token/token.service';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err: any) => {
      if ((err instanceof HttpErrorResponse) && err.status === 403) {
        console.info('Sessão vencida, é necessario se autenticar novamente.');
        tokenService.clearToken();
        router.navigateByUrl('/')
      }

      return throwError(() => err);
    })
  );
};
