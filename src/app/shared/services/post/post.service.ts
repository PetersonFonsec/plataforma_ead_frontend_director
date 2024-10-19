import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { ICreatePostRequest, ICreatePostResponse } from './post.model';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  #http = inject(HttpClient);
  #baseUrl = environment.url;

  create(payload: ICreatePostRequest): Observable<ICreatePostResponse> {
    return this.#http.post<ICreatePostResponse>(`${this.#baseUrl}/post`, payload);
  }

  list(): Observable<any[]> {
    return this.#http.get<ICreatePostResponse[]>(`${this.#baseUrl}/post`);
  }

  get(id: string): Observable<any> {
    return this.#http.get<ICreatePostResponse>(`${this.#baseUrl}/post/${id}`);
  }
}
