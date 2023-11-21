import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Log {
  @Prop({ type: Types.ObjectId, ref: 'TaskSchema' })
  task: { type: Types.ObjectId; ref: 'TaskSchema' };

  @Prop({ type: Types.ObjectId, ref: 'UserSchema' })
  author: { type: Types.ObjectId; ref: 'UserSchema' };

  @Prop()
  body: string;
}
export const LogSchema = SchemaFactory.createForClass(Log);
