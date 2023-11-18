import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  //   Get all users service
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  //   Create new user service
  async create(user: User): Promise<User> {
    // Hash password
    user.password = await bcrypt.hashSync(user.password, 10);
    const res = await this.userModel.create(user);
    return res;
  }

  // Find user by id service
  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Find and update user by id service
  async updateById(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
  }

  // Delete user by id service
  async deleteById(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }

  // File user when login
  async findByLogin(email: string, password: string): Promise<User> {
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
