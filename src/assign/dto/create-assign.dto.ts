import { IsNotEmptyObject } from "class-validator";
import { Types } from "mongoose";

export class CreateAssignDto {
  @IsNotEmptyObject()
  readonly leader: { type: Types.ObjectId; ref: "UserSchema" };

  @IsNotEmptyObject()
  readonly task: { type: Types.ObjectId; ref: "TaskSchema" };

  readonly attachments: [string];
}
