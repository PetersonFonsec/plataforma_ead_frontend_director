import { enableEncryption, encript } from "@shared/decorators/encript/encript.decorator";

@enableEncryption()
export class PayloadRequest {
  email = "";

  password: any;

  confirmPassword: any;

  documentNumber: any;

  documentType: any;

  person: Person = new Person();
}

export class Person {
  @encript
  name: any;

  @encript
  surname: any;

  idade: any;
}
