import { PartialType } from "@nestjs/mapped-types";
import { CreateAssignDto } from "./create-assign.dto";
import { Types } from "mongoose";

export class UpdateAssignDto extends PartialType(CreateAssignDto) {
  readonly leader: { type: Types.ObjectId; ref: "UserSchema" };
  readonly task: { type: Types.ObjectId; ref: "TaskSchema" };
  readonly attachments: [string];
}
