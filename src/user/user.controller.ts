import { Body,Req, Controller,Get, Post ,Patch,Delete} from '@nestjs/common';
import {UserService} from './user.service'
import { get } from 'http';
import {CreateUserDto} from './dto/create-user.dto';


@Controller('user')
export class UserController {

  constructor(private readonly UserService:UserService){}

  @Post('register')
  async register(@Body() createUser){
    const user=await this.UserService.create(createUser);
    return user;
  }
 
  @Post('login')
  async login(@Body()  UpdateUser){
  const user= await this.UserService.update(UpdateUser);
  return user;
  }

  @Get('profile')
  async getuser(@Req() req: Request, @Body() updateUserDto){
    const user = req.user;
    await this.UserService.update( updateUserDto);
    return this.UserService.findOneByEmail(user.email);
  }

  @Patch('profile')
  async updateProfile(@Req() req: Request, @Body() updateUserDto) {
    const user = req.user;
    await this.UserService.update(user.id, updateUserDto);
    return this.UserService.findOneByEmail(user.email);
  }

  @Delete('profile')
  async deleteProfile(@Req() req: Request) {
    const user = req.user;
    await this.UserService.remove(user.id);
  }
}