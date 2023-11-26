import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UserService } from "./user.service";
import { Controller, Get, Body, Param, Patch, Delete, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guards/jwt.guard";
import { Role } from "src/auth/roles/role.enum";
import { Roles } from "src/auth/roles/roles.decorator";
import { RolesGuard } from "src/auth/guards/roles.guard";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  // Get all user controller
  @Roles(Role.Admin)
  @UseGuards(JwtGuard, RolesGuard)
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
