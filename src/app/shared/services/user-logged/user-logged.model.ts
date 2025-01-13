import { LoginResponse } from "app/pages/auth/services/auth/auth.model";

export interface IUserLogged extends LoginResponse { }

export interface IUser {
  email: string,
  name: string,
  role: string,
  photo: string,
  id: number
}
