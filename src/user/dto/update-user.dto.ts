import { Role } from '../schemas/user.schema';

export class UpdateUserDto {
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
  readonly status: string;
  readonly position: string;
  readonly role: Role;
}
