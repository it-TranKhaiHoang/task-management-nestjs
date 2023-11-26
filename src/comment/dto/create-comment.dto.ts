import { IsNotEmptyObject } from "class-validator";
import { Types } from "mongoose";

export class CreateCommentDto {
  @IsNotEmptyObject()
  project: { type: Types.ObjectId; ref: "Project" };

  @IsNotEmptyObject()
  author: { type: Types.ObjectId; ref: "User" };

  body: string;
}
