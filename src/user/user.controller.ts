import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UserService } from "./user.service";
import { Controller, Get, Body, Param, Patch, Delete, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guard/jwt.guard";
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  // Get all user controller
  @UseGuards(JwtGuard)
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  // Get user by Id
  @Get(":id")
  async getUserById(
    @Param("id")
    id: string,
  ): Promise<User> {
    return this.userService.findById(id);
  }

  // Update user by Id
  @Patch(":id")
  async updateUserById(
    @Param("id")
    id: string,
    @Body()
    user: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateById(id, user);
  }

  // Delete user by Id
  @Delete(":id")
  async deleteUserById(
    @Param("id")
    id: string,
  ): Promise<User> {
    return this.userService.deleteById(id);
  }
}
