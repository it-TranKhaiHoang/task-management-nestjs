import { Types } from "mongoose";
import { Status } from "../schema/project.schema";
import { IsNotEmpty, IsNotEmptyObject } from "class-validator";

export class CreateProjectDto {
  @IsNotEmptyObject()
  leader: { type: Types.ObjectId; ref: "User" };

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  status: Status;
}
