import { Role } from "src/user/schemas/user.schema";

export class RegisterUserDto {
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
  readonly status: string;
  readonly position: string;
  readonly role: Role;
}
