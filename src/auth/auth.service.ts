import { UserService } from "./../user/user.service";
import { User } from "./../user/schemas/user.schema";
import { Injectable, HttpException, HttpStatus, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // Auth register service
  async register(user: User): Promise<User> {
    // Hash password
    user.password = await bcrypt.hash(user.password, 10);

    // Check email is exist
    const isExitsEmail = await this.userService.findByEmail(user.email);

    if (isExitsEmail) {
      throw new HttpException("User already exist", HttpStatus.BAD_REQUEST);
    }
    const res = await this.userService.create(user);
    return res;
  }

  // Validate user
  async validateUser({ email, password }): Promise<any> {
    // Get user by email
    const user = await this.userService.findByEmail(email);
    // Check email and password
    if (user && (await bcrypt.compareSync(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException();
  }

  // Auth login service
  async signIn({ email, password }: LoginUserDto): Promise<any> {
    const user = await this.validateUser({ email, password });

    const payload = {
      role: user.role,
      fullname: user.fullname,
      email: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN,
        secret: process.env.JWT_SECRET_KEY,
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN,
        secret: process.env.JWT_REFRESH_KEY,
      }),
    };
  }

  // Refresh token
  async refreshToken(user: User): Promise<any> {
    const payload = {
      role: user.role,
      fullname: user.fullname,
      email: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN,
        secret: process.env.JWT_SECRET_KEY,
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN,
        secret: process.env.JWT_REFRESH_KEY,
      }),
    };
  }
}
