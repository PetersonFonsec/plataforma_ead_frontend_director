import { Roles } from "@shared/enums/roles.enum"
import { College } from "@shared/services/college/collage.model"
import { IUser } from "@shared/services/user-logged/user-logged.model"

export interface LoginRequest {
  email: string,
  password: string
}

export interface LoginResponse {
  access_token: string,
  user: IUser,
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
