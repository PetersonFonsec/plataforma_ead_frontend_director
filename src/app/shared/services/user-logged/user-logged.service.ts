import { Injectable, signal } from '@angular/core';
import { user } from './user-logged.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {
  user = signal<any>(null);

  setUser(user: user) {
    this.user.update(() => user)
  }
}
