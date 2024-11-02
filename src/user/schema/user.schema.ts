import * as mongoose from 'mongoose';
import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose'

@Schema()
export class users{

    @Prop()
    fierstName:string;

    @Prop()
    password:number;

    @Prop()
    lastName:string;

    @Prop()
    email:string;

    @Prop()
    age:number;

    @Prop()
    role: string; // 'admin' or 'customer'


}

export const usersSchema=SchemaFactory.createForClass(users);

export interface Iusers extends Document{
    fierstName: string;
    password:number;
    lastName: string;
    email: string;
    age: number; 
}