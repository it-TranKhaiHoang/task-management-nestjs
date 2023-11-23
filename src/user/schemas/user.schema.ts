/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum Role {
  ADMIN = "Admin",
  STAFF = "Staff",
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  fullname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  status: string;

  @Prop()
  position: string;

  @Prop()
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
