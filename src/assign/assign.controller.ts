import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AssignService } from "./assign.service";
import { CreateAssignDto } from "./dto/create-assign.dto";
import { UpdateAssignDto } from "./dto/update-assign.dto";
import { Assign } from "./schema/assign.schema";

@Controller("assign")
export class AssignController {
  constructor(private assignService: AssignService) {}

  // Create a new assign
  @Post()
  async create(
    @Body()
    assign: CreateAssignDto,
  ): Promise<Assign> {
    return this.assignService.create(assign);
  }

  // Get all assign
  @Get()
  async findAll(): Promise<Assign[]> {
    return this.assignService.findAll();
  }

  // Get assign by id
  @Get(":id")
  findOne(@Param("id") id: string): Promise<Assign> {
    return this.assignService.findOne(id);
  }

  // Update assign by id
  @Patch(":id")
  update(@Param("id") id: string, @Body() assign: UpdateAssignDto) {
    return this.assignService.update(id, assign);
  }

  // Delete assign by id
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.assignService.delete(id);
  }
}
