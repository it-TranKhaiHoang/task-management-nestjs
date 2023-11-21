import { Module } from '@nestjs/common';
import { AssignService } from './assign.service';
import { AssignController } from './assign.controller';

@Module({
  controllers: [AssignController],
  providers: [AssignService],
})
export class AssignModule {}
