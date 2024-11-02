import { Module } from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import {UsersModule} from '../user/user.module'
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {JwtStrategy} from './strategies/jwt.strategy'
import {LocalStrategy} from './strategies/local.strategy'



@Module({
  imports:[UsersModule, PassportModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}