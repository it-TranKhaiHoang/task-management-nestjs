import { Role } from '../schemas/user.schema';
import { CreteUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreteUserDto) {
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
  readonly status: string;
  readonly position: string;
  readonly role: Role;
}
