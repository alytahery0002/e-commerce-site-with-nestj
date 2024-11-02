import {Injectable,NotFoundException, UnauthorizedException,BadRequestException,} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import * as bcrypt from 'bcrypt';

import {users,Iusers} from './schema/user.schema';
import {CreateUserDto} from './dto/create-user.dto';
import { Mode } from 'fs';

@Injectable()
export class UserService{

    constructor(@InjectModel(users.name) private usersModel: Model<Iusers>){}

    async validateUser(username:string, password:string){
         const user=await this.usersModel.findOne({username});
         if(!user){
            throw new BadRequestException('User not found');
         }
        //  const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

        const isMatch: boolean = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            throw new BadRequestException('Password does not match');
        }
    return user;
      }

    async create(UserDto:CreateUserDto){
        const {email,password,role}=UserDto
        const hashedPassword= bcrypt.hash(password,10);
        const NewUser= await new this.usersModel({email, password: hashedPassword, role})
        return NewUser.save();

    }

    async findOneByEmail(email:string)
    {
         const user= await this.usersModel.findOne({email})
         return user;
    }

     async findOneById(Id:number)
    {
         const user= await this.usersModel.findOne({Id})
         return user;
    }

    async getUsers(){
        const users=await this.usersModel.find();
        return users;
    }

    async getSingleUser(username:string, password:string){
        const users=await this.usersModel.find({username,password});
        return users;
    }

    async update(UserDto:CreateUserDto){
        const {password}=UserDto;
        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
        // check
        const user= await this.usersModel.findOneAndUpdate({hashedPassword,$set:{UserDto}})
        // check
        return user
    }

    async remove(id:number){
        await this.usersModel.findByIdAndDelete(id);
    }

}   