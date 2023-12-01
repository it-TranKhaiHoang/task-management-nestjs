import { IsNotEmpty } from "class-validator";

export class CreateTaskDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  project: string;

  description: string;

  @IsNotEmpty()
  members: [string];

  @IsNotEmpty()
  start_date: Date;

  @IsNotEmpty()
  end_date: Date;

  attachments: [string];
}
