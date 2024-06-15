import { Injectable, signal } from '@angular/core';
import { IUserLogged } from './user-logged.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {
  user = signal<IUserLogged>(null as any);

  setUser(user: IUserLogged) {
    this.user.update(() => user)
  }
}
