import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import {
  GetProfileRequest,
  GetProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse
} from './profile.model';
import { environment } from 'environments/environment';
import { Utils } from '@shared/services/utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  #http = inject(HttpClient);
  #baseUrl = environment.url;

  getProfile(payload: GetProfileRequest): Observable<GetProfileResponse> {
    return this.#http.get<GetProfileResponse>(`${this.#baseUrl}/users/${payload.id}`)
  }

  updateProfile(payload: UpdateProfileRequest): Observable<UpdateProfileResponse> {
    const formatedPayload = Utils.convertToFormData(payload);
    return this.#http.patch<UpdateProfileResponse>(`${this.#baseUrl}/users/`, formatedPayload)
  }
}
