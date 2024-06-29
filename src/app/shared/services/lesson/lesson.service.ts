import { Injectable, inject } from '@angular/core';
import { Utils } from '../utils/utils.service';
import { LessonCreateRequest } from './lesson.model';
import { Observable } from 'rxjs';
import { UserLoggedService } from '../user-logged/user-logged.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  #userService = inject(UserLoggedService);
  #http = inject(HttpClient);
  #baseUrl = environment.url;

  create(payload: LessonCreateRequest): Observable<any> {
    const formatedPayload = Utils.convertToFormData(payload);
    return this.#http.post<LessonCreateRequest>(`${this.#baseUrl}/lesson`, formatedPayload);
  }
}
