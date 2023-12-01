import { ProjectService } from "./../project/project.service";
import { UserService } from "./../user/user.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Task } from "./schema/task.schema";
import mongoose from "mongoose";

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private taskModel: mongoose.Model<Task>,
    private userService: UserService,
    private projectService: ProjectService,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const projectID = createTaskDto.project;
    const listMemberID = createTaskDto.members;

    // Check project is exist
    // const project = await this.projectService.findOne(projectID);
    // if (!project) {
    //   throw new NotFoundException("Project not found");
    // }
    if (listMemberID.length > 0) {
      const isExits = await this.userService.checkExist(listMemberID);
      console.log(isExits);
    }

    return "This action adds a new task";
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }

  async checkUserIsExist(listUser: [string]) {}
}
