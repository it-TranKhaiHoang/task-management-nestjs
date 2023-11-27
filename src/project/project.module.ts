import { Module } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { ProjectController } from "./project.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { ProjectSchema } from "./schema/project.schema";
import { UserSchema } from "src/user/schemas/user.schema";
import { UserService } from "src/user/user.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Project", schema: ProjectSchema },
      { name: "User", schema: UserSchema },
    ]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService, UserService],
})
export class ProjectModule {}
