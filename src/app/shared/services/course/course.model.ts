export interface ICourse {
  createdAt: string
  collegeId: number
  updatedAt: string
  thumb: string
  name: string
  id: number
  content: any
}

export class CourseForm {
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
