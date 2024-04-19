import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import {
  GetProfileRequest,
  GetProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse
} from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  #http = inject(HttpClient);

  getProfile(payload: GetProfileRequest): Observable<GetProfileResponse> {
    return this.#http.get<GetProfileResponse>(`http://localhost:3000/users/${payload.id}`)
  }

  updateProfile(payload: UpdateProfileRequest): Observable<UpdateProfileResponse> {
    return this.#http.patch<UpdateProfileResponse>(`http://localhost:3000/users/${payload.id}`, payload)
  }
}
