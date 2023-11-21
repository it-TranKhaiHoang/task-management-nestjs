import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Assign {
  @Prop({ required: true, type: Types.ObjectId, ref: 'UserSchema' })
  leader: { type: Types.ObjectId; ref: 'UserSchema' };

  @Prop({ type: Types.ObjectId, ref: 'TaskSchema' })
  task: { type: Types.ObjectId; ref: 'TaskSchema' };

  @Prop()
  attachments: [string];
}

export const AssignSchema = SchemaFactory.createForClass(Assign);
