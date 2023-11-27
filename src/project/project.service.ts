import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Project } from "./schema/project.schema";
import mongoose from "mongoose";
import { UserService } from "src/user/user.service";

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private projectModel: mongoose.Model<Project>,
    private userService: UserService,
  ) {}

  // Create Project
  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    // Check user id
    const leaderID = createProjectDto.leader;
    const leader = await this.userService.findById(leaderID);
    if (!leader) {
      throw new NotFoundException("Leader not Found");
    }
    const res = await this.projectModel.create(createProjectDto);
    return res;
  }

  async findAll(): Promise<Project[]> {
    const projects = await this.projectModel.find().populate("leader", "-password").lean().exec();
    return projects;
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.projectModel.findById(id).populate("leader", "-password").lean().exec();
    if (!project) {
      throw new NotFoundException("Project not found");
    }
    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto): Promise<Project> {
    return await this.projectModel
      .findByIdAndUpdate(id, updateProjectDto, {
        new: true,
        runValidators: true,
      })
      .populate("leader", "-password");
  }

  async remove(id: string): Promise<Project> {
    return this.projectModel.findByIdAndDelete(id).populate("leader", "-password");
  }
}
