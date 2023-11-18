import { User } from './../user/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  // Auth register service
  async register(user: User): Promise<User> {
    user.password = await bcrypt.hashSync(user.password, 10);
    const res = await this.userModel.create(user);
    return res;
  }

  // Auth login service
  async login({ email, password }: LoginUserDto): Promise<User> {
    const user = await this.userModel.findOne({ email: email });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    const isEqual = bcrypt.compareSync(password, user.password);
    if (!isEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
