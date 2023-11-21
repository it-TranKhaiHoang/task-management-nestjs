import { Types } from 'mongoose';

export class CreateAssignDto {
  readonly leader: { type: Types.ObjectId; ref: 'UserSchema' };
  readonly task: { type: Types.ObjectId; ref: 'TaskSchema' };
  readonly attachments: [string];
}
