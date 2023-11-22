import { User } from './../user/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private jwtService: JwtService,
  ) {}

  // Auth register service
  async register(user: User): Promise<User> {
    // Hash password
    user.password = await bcrypt.hash(user.password, 10);

    // Check email is exist
    const isExitsEmail = await this.userModel.findOne({ email: user.email });

    if (isExitsEmail) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }
    const res = await this.userModel.create(user);
    return res;
  }

  // Auth login service
  async login({ email, password }: LoginUserDto): Promise<any> {
    const user = await this.userModel.findOne({ email: email });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    const isEqual = bcrypt.compareSync(password, user.password);
    if (!isEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const payload = { sub: user._id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN,
        secret: process.env.JWT_SECRET_KEY,
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: process.env.EXPIRES_IN_REFRESH_TOKEN,
        secret: process.env.JWT_REFRESH_KEY,
      }),
    };
  }
}
