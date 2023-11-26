import { Role } from "src/user/schemas/user.schema";
import { IsEmail, IsNotEmpty } from "class-validator";
export class RegisterUserDto {
  @IsNotEmpty()
  readonly fullname: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly status: string;

  @IsNotEmpty()
  readonly position: string;

  @IsNotEmpty()
  readonly role: Role;
}
