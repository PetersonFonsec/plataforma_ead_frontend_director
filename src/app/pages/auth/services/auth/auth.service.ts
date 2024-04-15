
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './auth.model';
import { TokenService } from '../../../../shared/services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #tokenService = inject(TokenService);
  #http = inject(HttpClient);

  login({ email, password }: LoginRequest): Observable<LoginResponse> {
    return this.#http.post<LoginResponse>("http://localhost:3000/auth/login", { email, password })
      .pipe(tap(({ access_token }) => this.#tokenService.token = access_token))
  }

  register(payload: RegisterRequest): Observable<RegisterResponse> {
    let url = "http://localhost:3000/auth/register/";
    url += payload.role.toLocaleLowerCase();

    return this.#http.post<RegisterResponse>(url, payload)
      .pipe(tap(({ access_token }) => this.#tokenService.token = access_token))
  }

  logout() {
    this.#tokenService.clearToken();
  }
}
