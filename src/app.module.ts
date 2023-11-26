import { AuthModule } from "./auth/auth.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AssignModule } from "./assign/assign.module";
import { UserModule } from "./user/user.module";
import { AbilityModule } from "./ability/ability.module";
import { ProjectModule } from "./project/project.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    AssignModule,
    AuthModule,
    AbilityModule,
    ProjectModule,
  ],
})
export class AppModule {}
