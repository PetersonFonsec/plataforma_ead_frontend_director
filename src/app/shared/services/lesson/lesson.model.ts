import { SafeHtml } from "@angular/platform-browser"

export interface LessonCreateRequest {
  description: string
  urlContent: string
  courseId: number
  content: SafeHtml
  title: string
  video: any
}
