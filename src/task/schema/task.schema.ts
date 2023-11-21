import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'ProjectSchema' })
  project: { type: Types.ObjectId; ref: 'ProjectSchema' };

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'UserSchema' })
  members: [{ type: Types.ObjectId; ref: 'UserSchema' }];

  @Prop()
  start_date: Date;

  @Prop()
  end_date: Date;

  @Prop()
  attachments: [string];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
