import { Injectable } from '@nestjs/common';
import { CreateAssignDto } from './dto/create-assign.dto';
import { UpdateAssignDto } from './dto/update-assign.dto';

@Injectable()
export class AssignService {
  create(createAssignDto: CreateAssignDto) {
    return 'This action adds a new assign';
  }

  findAll() {
    return `This action returns all assign`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assign`;
  }

  update(id: number, updateAssignDto: UpdateAssignDto) {
    return `This action updates a #${id} assign`;
  }

  remove(id: number) {
    return `This action removes a #${id} assign`;
  }
}
