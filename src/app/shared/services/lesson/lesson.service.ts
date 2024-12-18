import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Utils } from '../utils/utils.service';
import { GetLessonResponse, LessonCreateRequest } from './lesson.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  #http = inject(HttpClient);
  #baseUrl = environment.url;

  create(payload: LessonCreateRequest): Observable<any> {
    const formatedPayload = Utils.convertToFormData(payload);
    return this.#http.post(`${this.#baseUrl}/lesson`, formatedPayload);
  }

  get(lessonId: number | string): Observable<GetLessonResponse> {
    return this.#http.get<GetLessonResponse>(`${this.#baseUrl}/lesson/${lessonId}`);
  }
}
