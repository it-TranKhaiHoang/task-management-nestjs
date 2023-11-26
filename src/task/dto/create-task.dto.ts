import { Types } from "mongoose";
import { IsNotEmpty, IsNotEmptyObject } from "class-validator";

export class CreateTaskDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmptyObject()
  project: { type: Types.ObjectId; ref: "Project" };

  description: string;

  @IsNotEmptyObject()
  members: [{ type: Types.ObjectId; ref: "User" }];

  @IsNotEmpty()
  start_date: Date;

  @IsNotEmpty()
  end_date: Date;

  attachments: [string];
}
