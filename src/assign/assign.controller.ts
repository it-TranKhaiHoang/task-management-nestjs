import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssignService } from './assign.service';
import { CreateAssignDto } from './dto/create-assign.dto';
import { UpdateAssignDto } from './dto/update-assign.dto';

@Controller('assign')
export class AssignController {
  constructor(private readonly assignService: AssignService) {}

  @Post()
  create(@Body() createAssignDto: CreateAssignDto) {
    return this.assignService.create(createAssignDto);
  }

  @Get()
  findAll() {
    return this.assignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssignDto: UpdateAssignDto) {
    return this.assignService.update(+id, updateAssignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignService.remove(+id);
  }
}
