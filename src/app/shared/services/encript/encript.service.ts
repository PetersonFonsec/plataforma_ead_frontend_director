import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncriptService {

  encript(value: string) {
    return of(btoa(value))
  }

  decript(value: string) {
    return of(atob(value))
  }
}
