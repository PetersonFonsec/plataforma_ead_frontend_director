import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";

import { TokenService } from '../../services/token/token.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);

  if (tokenService.token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenService.token}`,
        Accept: 'application/json',
      },
    });
  }

  return next(req);
};
