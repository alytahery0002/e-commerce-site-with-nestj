import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import{users,usersSchema}from './schema/user.schema'
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: users.name,
        schema: usersSchema,
      },
    ]),
  ],
  controllers: [UserController]
})
export class UsersModule {}
