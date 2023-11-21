import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Assign } from './schema/assign.schema';
import mongoose from 'mongoose';

@Injectable()
export class AssignService {
  constructor(
    @InjectModel(Assign.name)
    private assignModel: mongoose.Model<Assign>,
  ) {}

  async create(assign: Assign): Promise<Assign> {
    const res = await this.assignModel.create(assign);
    return res;
  }

  async findAll(): Promise<Assign[]> {
    const assigns = await this.assignModel.find();
    return assigns;
  }

  async findOne(id: string): Promise<Assign> {
    const assign = await this.assignModel.findById(id);
    if (!assign) {
      throw new NotFoundException('Assign not found');
    }
    return assign;
  }

  async update(id: string, assign: Assign): Promise<Assign> {
    return await this.assignModel.findByIdAndUpdate(id, assign, {
      new: true,
      runValidators: true,
    });
  }

  async delete(id: string): Promise<Assign> {
    return await this.assignModel.findByIdAndDelete(id);
  }
}
