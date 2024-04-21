export interface College {
  CollegeStyle: CollegeStyle[]
  createdAt: string,
  updatedAt: string,
  userId: number,
  name: string,
  id: number,
}

export interface CollegeStyle {
  secundaryColor: string,
  primaryColor: string,
  createdAt: string,
  updatedAt: string,
  collegeId: number,
  thumb: string,
  id: number,
}

export interface ResponseCollegelist extends College { }

export interface CollegeRequest {
  secundaryColor: string,
  primaryColor: string,
  thumb: any,
  name: string,
}

export interface CollegeResponse {
  secundaryColor: string,
  primaryColor: string,
  createdAt: string,
  updatedAt: string,
  collegeId: number,
  thumb: string,
  id: number,
}
