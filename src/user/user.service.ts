import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { User } from "./schemas/user.schema";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  // Create User
  async create(user: User): Promise<User> {
    const res = await this.userModel.create(user);
    return res;
  }
  //   Get all users service
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  // Get user by Email
  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email: email }).select("_id fullname role password email").lean();
    return user;
  }

  // Find user by id service
  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException("User not found");
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
}
