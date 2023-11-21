import { CreteUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Get all user controller
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  // Register new user
  @Post()
  async createUser(
    @Body()
    user: CreteUserDto,
  ): Promise<User> {
    return this.userService.create(user);
  }

  // Get user by Id
  @Get(':id')
  async getUserById(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.userService.findById(id);
  }

  // Update user by Id
  @Patch(':id')
  async updateUserById(
    @Param('id')
    id: string,
    @Body()
    user: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateById(id, user);
  }

  // Delete user by Id
  @Delete(':id')
  async deleteUserById(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.userService.deleteById(id);
  }
}
