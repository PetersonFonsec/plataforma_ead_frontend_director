import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { QuizCreateRequest, QuizCreateResponse } from './quiz.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  #http = inject(HttpClient);
  #baseUrl = environment.url;

  create(payload: QuizCreateRequest): Observable<QuizCreateResponse> {
    return this.#http.post<QuizCreateResponse>(`${this.#baseUrl}/quiz`, payload);
  }
}
