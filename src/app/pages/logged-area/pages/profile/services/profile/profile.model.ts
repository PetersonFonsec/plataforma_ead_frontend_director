import { Roles } from "@shared/enums/roles.enum"

export interface GetProfileRequest {
  id: string
}

export interface GetProfileResponse {
  email: string,
  name: string,
  role: string,
  id: number
}

export interface UpdateProfileRequest {
  documentNumber?: string,
  celphone?: string,
  photo?: string,
  email?: string,
  name?: string,
}

export interface UpdateProfileResponse extends GetProfileResponse {
  photo: string,
  role: Roles
}
