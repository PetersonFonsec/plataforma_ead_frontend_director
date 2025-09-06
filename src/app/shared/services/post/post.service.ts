import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';

import { ICreatePostRequest, ICreatePostResponse, IListPostResponse } from './post.model';
import { IPost } from '@shared/components/post/post.component';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  #http = inject(HttpClient);
  #baseUrl = environment.url;

  create(payload: ICreatePostRequest): Observable<ICreatePostResponse> {
    return this.#http.post<ICreatePostResponse>(`${this.#baseUrl}/post`, payload);
  }

  list(): Observable<IListPostResponse> {
    return this.#http.get<IListPostResponse>(`${this.#baseUrl}/post`);
  }

  get(id: string): Observable<IPost> {
    return this.#http.get<IPost>(`${this.#baseUrl}/post/${id}`);
  }
}
