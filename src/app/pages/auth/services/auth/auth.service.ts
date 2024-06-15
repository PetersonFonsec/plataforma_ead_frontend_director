
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './auth.model';
import { TokenService } from '@shared/services/token/token.service';
import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #userService = inject(UserLoggedService);
  #tokenService = inject(TokenService);
  #http = inject(HttpClient);
  #baseUrl = environment.url;

  login({ email, password }: LoginRequest): Observable<LoginResponse> {
    return this.#http.post<LoginResponse>(`${this.#baseUrl}/auth/login`, { email, password })
      .pipe(
        tap(({ access_token }) => this.#tokenService.token = access_token),
        tap(response => {
          this.#userService.seUserLogged(response);
        })
      )
  }

  register(payload: RegisterRequest): Observable<RegisterResponse> {
    let url = `${this.#baseUrl}/auth/register/`;
    url += payload.role.toLocaleLowerCase();

    return this.#http.post<RegisterResponse>(url, payload)
      .pipe(
        tap(({ access_token }) => this.#tokenService.token = access_token),
        tap(response => {
          this.#userService.seUserLogged(response as any);
        })
      )
  }

  logout() {
    this.#tokenService.clearToken();
  }
}
