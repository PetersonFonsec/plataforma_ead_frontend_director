import { IPagination } from '@shared/interfaces/pagination.interface';
import { IPost } from './post.mock';
export interface ICreatePostRequest {
  collegeId: string;
  courseId: string;
  content: string;
}

export interface ICreatePostResponse {
  collegeId: string;
  courseId: string;
  content: string;
}

export interface IListPostResponse extends IPagination<IPost> { }
