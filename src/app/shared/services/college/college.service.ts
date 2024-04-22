
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CollegeRequest, CollegeResponse, ResponseCollegelist } from './collage.model';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  #http = inject(HttpClient);

  getCollages(): Observable<ResponseCollegelist[]> {
    return this.#http.get<ResponseCollegelist[]>("http://localhost:3000/college")
  }

  createCollege(payload: CollegeRequest): Observable<CollegeResponse> {
    return this.#http.post<CollegeResponse>("http://localhost:3000/college", payload)
  }
}
