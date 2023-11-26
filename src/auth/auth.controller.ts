import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { User } from "src/user/schemas/user.schema";
import { AuthService } from "./auth.service";
import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Request } from "@nestjs/common";
import { RefreshJwtGuard } from "./guards/jwt.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  // Auth register controller
  @Post("register")
  async register(
    @Body()
    user: RegisterUserDto,
  ): Promise<User> {
    return this.authService.register(user);
  }

  // Auth login controller
  @HttpCode(HttpStatus.OK)
  @Post("login")
  async login(
    @Body()
    user: LoginUserDto,
  ): Promise<any> {
    return this.authService.signIn(user);
  }

  // Refresh token
  @UseGuards(RefreshJwtGuard)
  @Post("refresh")
  async refreshToken(@Request() req): Promise<any> {
    return await this.authService.refreshToken(req.user);
  }
}
