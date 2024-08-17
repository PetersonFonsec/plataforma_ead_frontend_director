import { SafeHtml } from "@angular/platform-browser"

export interface LessonCreateRequest {
  title: string
  description: string
  urlContent: string
  courseId: number
  content: SafeHtml
  fileVideo: any
}
