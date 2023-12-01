import { Module } from "@nestjs/common";
import { TaskService } from "./task.service";
import { TaskController } from "./task.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskSchema } from "./schema/task.schema";
import { UserSchema } from "src/user/schemas/user.schema";
import { ProjectSchema } from "src/project/schema/project.schema";
import { UserService } from "src/user/user.service";
import { ProjectService } from "src/project/project.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Task", schema: TaskSchema },
      { name: "User", schema: UserSchema },
      { name: "Project", schema: ProjectSchema },
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService, UserService, ProjectService],
})
export class TaskModule {}
