import { Types } from "mongoose";
import { Status } from "../schema/project.schema";
import { IsNotEmpty } from "class-validator";

export class CreateProjectDto {
  @IsNotEmpty()
  leader: { type: Types.ObjectId; ref: "User" };

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  status: Status;
}
