import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {UserService} from '../user/user.service';
import {Iusers} from '../user/schema/user.schema'

@Injectable()
export class AuthService {
  constructor(private readonly Userservice:UserService,
              private jwtService:JwtService
    ){

  }
  async login(user: CreateAuthDto) {
    const payload = {
      username: user.fierstName,
      sub: user.id,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  getProfile(user: Iusers) {
    const myUser=this.Userservice.findOneById(user.id);
    return myUser;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

 
}
