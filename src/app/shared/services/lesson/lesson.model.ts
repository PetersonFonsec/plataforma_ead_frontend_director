import { SafeHtml } from "@angular/platform-browser"

export interface LessonCreateRequest {
  title: string
  description: string
  urlContent: string
  courseId: number
  content: SafeHtml
  fileVideo: any
}

export interface GetLessonResponse {
  authorId: number
  courseId: number
  createdAt: string
  description: string
  id: number
  title: string
  updatedAt: string
  urlContent: string
  content: string
}
