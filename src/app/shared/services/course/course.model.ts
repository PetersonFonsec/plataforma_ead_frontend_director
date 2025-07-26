export interface ICourse {
  createdAt: string
  collegeId: number
  updatedAt: string
  thumb: string
  name: string
  id: number
  description: string
  content: any
}

export class CourseForm {
  description = ""
  thumb = ""
  name = ""
  id = -1
}

export interface IRequestCourseCreate {
  thumb: any,
  name: string,
  collegeId: number
}

export interface IResponseCourseCreate extends ICourse { }
export interface IResponseCourseGetById extends ICourse { }
