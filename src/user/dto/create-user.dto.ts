import { IsEmail, IsNotEmpty } from "class-validator";
import { Role } from "../schemas/user.schema";
export class CreteUserDto {
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
