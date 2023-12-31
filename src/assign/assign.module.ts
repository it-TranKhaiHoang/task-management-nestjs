import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AssignService } from './assign.service';
import { AssignController } from './assign.controller';
import { AssignSchema } from './schema/assign.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Assign', schema: AssignSchema }]),
  ],
  controllers: [AssignController],
  providers: [AssignService],
})
export class AssignModule {}
