
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, tap, throwError } from 'rxjs';

import { College, CollegeRequest, CollegeResponse, ResponseCollegelist } from './collage.model';
import { environment } from 'environments/environment';
import { Utils } from '../utils/utils.service';
import { UserLoggedService } from '../user-logged/user-logged.service';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  #userService = inject(UserLoggedService);
  #http = inject(HttpClient);
  #baseUrl = environment.url;

  getCollages(collegeId: string | number): Observable<College> {
    return new Observable((subscribe) => {
      const id = `${collegeId}`;
      const inMemory = this.getCollagesInMemory(id);

      if (inMemory) {
        subscribe.next(inMemory)
        subscribe.complete();
        return;
      }

      this.searchCollagesByCollegeId(id).subscribe({
        next: (response) => {
          subscribe.next(response);
          subscribe.complete();
        },
        error: (error) => {
          subscribe.error(error);
          subscribe.complete();
        }
      })
    })
  }

  getCollagesInMemory(collegeId: string): College {
    const user = this.#userService.user();
    const college = user.colleges.filter((college) => `${college.id}` === collegeId);
    return college[0] ?? null;
  }

  searchCollagesByCollegeId(collegeId: string): Observable<ResponseCollegelist> {
    return this.#http.get<ResponseCollegelist>(`${this.#baseUrl}/college/${collegeId}`).pipe(
      tap(res => this.updateCollegeInMemory(res))
    );
  }

  searchCollagesByUser(): Observable<ResponseCollegelist[]> {
    return this.#http.get<ResponseCollegelist[]>(`${this.#baseUrl}/college`).pipe(
      // tap(res => this.updateCollegeInMemory(res))
    );
  }

  createCollege(payload: CollegeRequest): Observable<CollegeResponse> {
    const formatedPayload = Utils.convertToFormData(payload);
    return this.#http.post<CollegeResponse>(`${this.#baseUrl}/college`, formatedPayload).pipe(
      // tap(res => this.updateCollegeInMemory(res))
    );
  }


  updateCollegeInMemory(college: College): void {
    const user = this.#userService.user();
    let currentCollege = user.colleges.filter(({ id }) => id === college.id)[0];
    currentCollege ? currentCollege = college : user.colleges.push(college);
  }
}
