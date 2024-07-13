
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';

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
    return this.#http.post<IResponseCourseCreate>(`${this.#baseUrl}/course`, formatedPayload).pipe(
      tap((res) => this.updateCourseInMemory(res))
    )
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

  updateCourseInMemory(course: ICourse): void {
    const user = this.#userService.user();
    const college = user.colleges.filter((college) => college.id === course.collegeId)[0];

    let currentCourse = college.Course.filter((college) => college.id === course.id)[0];
    currentCourse ? currentCourse = course : user.colleges.push(college);
  }

  getCoursesInMemory(): ICourse[] {
    const user = this.#userService.user();
    return user.colleges.reduce<ICourse[]>((acumulator, current) => {
      if (current.Course.length) acumulator.push(...current.Course);
      return acumulator
    }, []);
  }

  getContent(coursesId: string | number): Observable<any> {
    return this.#http.get<any>(`${this.#baseUrl}/course/${coursesId}/content`);
  }

  searchCourseById(coursesId: string): Observable<IResponseCourseGetById> {
    return this.#http.get<IResponseCourseGetById>(`${this.#baseUrl}/course/${coursesId}`);
  }
}
