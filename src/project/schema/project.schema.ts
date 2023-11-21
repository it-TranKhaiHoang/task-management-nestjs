import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export enum Status {
  TODO = 'Todo',
  PROGRESSING = 'Progressing',
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  CANCELED = 'Canceled',
}

@Schema({
  timestamps: true,
})
export class Project {
  @Prop({ type: Types.ObjectId, ref: 'UserSchema' })
  leader: { type: Types.ObjectId; ref: 'UserSchema' };

  @Prop()
  name: string;

  @Prop()
  status: Status;
}
export const ProjectSchema = SchemaFactory.createForClass(Project);
