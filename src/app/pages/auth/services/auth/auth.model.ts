import { Roles } from "../../../../shared/enums/roles.enum"

export interface LoginRequest {
  email: string,
  password: string
}

export interface LoginResponse {
  access_token: string,
  email: string,
  name: string,
  id: number
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
