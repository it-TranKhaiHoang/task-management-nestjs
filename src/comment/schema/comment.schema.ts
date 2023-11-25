import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({
  timestamps: true,
})
export class Comment {
  @Prop({ type: Types.ObjectId, ref: "ProjectSchema" })
  project: { types: Types.ObjectId; ref: "ProjectSchema" };

  @Prop({ type: Types.ObjectId, ref: "UserSchema" })
  author: { types: Types.ObjectId; ref: "UserSchema" };

  @Prop()
  body: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
