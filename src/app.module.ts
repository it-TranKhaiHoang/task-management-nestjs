import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { AssignModule } from './assign/assign.module';
// import { CommentModule } from './comment/comment.module';
// import { LogModule } from './log/log.module';
// import { ProjectModule } from './project/project.module';
// import { TaskModule } from './task/task.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    LogModule,
    // AssignModule,
    // TaskModule,
    // ProjectModule,
    // LogModule,
    // CommentModule,
    // AuthModule,
  ],
})
export class AppModule {}
