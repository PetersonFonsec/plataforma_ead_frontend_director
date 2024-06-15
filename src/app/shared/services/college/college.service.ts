
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { CollegeRequest, CollegeResponse, ResponseCollegelist } from './collage.model';
import { environment } from 'environments/environment';
import { Utils } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  #http = inject(HttpClient);
  #baseUrl = environment.url;

  getCollages(): Observable<ResponseCollegelist[]> {
    return this.#http.get<ResponseCollegelist[]>(`${this.#baseUrl}/college`)
  }

  createCollege(payload: CollegeRequest): Observable<CollegeResponse> {
    const formatedPayload = Utils.convertToFormData(payload);
    return this.#http.post<CollegeResponse>(`${this.#baseUrl}/college`, formatedPayload)
  }
}
