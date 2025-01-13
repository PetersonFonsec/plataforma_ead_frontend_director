import { CanActivateChildFn } from '@angular/router';

export const userLoggedGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
