import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  set token(token: string) {
    localStorage.setItem("@ODIN/TOKEN", token);
  }

  get token(): string {
    return localStorage.getItem("@ODIN/TOKEN") ?? '';
  }

  clearToken() {
    localStorage.removeItem("@ODIN/TOKEN")
  }

}
