import { Roles } from "@shared/enums/roles.enum";
import { RegisterRequest } from "../services/auth/auth.model";

export class RegisterPayload implements RegisterRequest {
  confirm_password!: string;
  documentNumber!: string;
  role = Roles.DIRECTOR;
  password!: string;
  email!: string;
  name!: string;
}
