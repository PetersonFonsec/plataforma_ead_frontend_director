
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ICourse, IRequestCourseCreate, IResponseCourseCreate, IResponseCourseGetById } from './course.model';
import { UserLoggedService } from '../user-logged/user-logged.service';
import { environment } from 'environments/environment';
import { Utils } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  #userService = inject(UserLoggedService);
  #http = inject(HttpClient);
  #baseUrl = environment.url;

  create(payload: IRequestCourseCreate): Observable<IResponseCourseCreate> {
    const formatedPayload = Utils.convertToFormData(payload);
    return this.#http.post<IResponseCourseCreate>(`${this.#baseUrl}/course`, formatedPayload);
  }

  getCourse(collegeId: string | number): Observable<ICourse> {
    return new Observable((subscribe) => {
      const id = `${collegeId}`;
      const inMemory = this.getCourseInMemory(id);

      if (inMemory) {
        subscribe.next(inMemory)
        subscribe.complete();
        return;
      }

      this.searchCourseById(id).subscribe({
        next: (response) => {
          subscribe.next(response);
          subscribe.complete();
        },
        error: (error) => {
          subscribe.error(error);
          subscribe.complete();
        }
      })
    });
  }

  getCourseInMemory(coursesId: string): ICourse {
    const courses = this.getCoursesInMemory();
    const course = courses.filter(course => course.id === parseInt(coursesId));
    return course[0] ?? null;
  }

  getCoursesInMemory(): ICourse[] {
    const user = this.#userService.user();
    return user.colleges.reduce((acumulator, current) => {
      acumulator.push(current.Course as never);
      return acumulator
    }, []);
  }

  searchCourseById(coursesId: string): Observable<IResponseCourseGetById> {
    return this.#http.get<IResponseCourseGetById>(`${this.#baseUrl}/course/${coursesId}`);
  }
}
