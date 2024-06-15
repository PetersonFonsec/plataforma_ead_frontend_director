import { Roles } from "@shared/enums/roles.enum"
import { College } from "@shared/services/college/collage.model"

export interface LoginRequest {
  email: string,
  password: string
}

export interface LoginResponse {
  access_token: string,
  user: {
    email: string,
    name: string,
    role: string,
    photo: string,
    id: number
  },
  colleges: College[],
  calendar: [],
}

export interface RegisterRequest {
  confirm_password: string,
  documentNumber: string,
  password: string,
  email: string,
  name: string,
  role: Roles,
}

export interface RegisterResponse extends LoginResponse {
}
