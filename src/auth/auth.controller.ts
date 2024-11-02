import { Controller, Get, Post, Body,UseGuards, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Public } from './decorators/public.decorator';
import {User} from './decorators/user.decorator'


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards()
  @Post()
  login(@User() user: CreateAuthDto) {
    return this.authService.login(user);
  }

  @Get()
  refreshToken() {
    return this.authService.findAll();
  }

  @Get('profile')
  getProfile(@User() user) {
    return this.authService.getProfile(user);
  }

}
