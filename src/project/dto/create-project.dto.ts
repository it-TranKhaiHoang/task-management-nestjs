import { Status } from "../schema/project.schema";
import { IsNotEmpty } from "class-validator";

export class CreateProjectDto {
  @IsNotEmpty()
  leader: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  status: Status;
}
