import * as mongoose from 'mongoose'
import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {OrderItem} from './orderItem.schema'
import {users} from '../../user/schema/user.schema'

@Schema()
export class orders {

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'usersSchema'})
    userId:users;

    @Prop()
    status:string;

    @Prop()
    total:string;

    @Prop()
    createdAt:Date;

    @Prop({type:[{type:mongoose.Schema.Types.ObjectId, ref: 'OrderItem'}]})
    orderItems:OrderItem[];

}
export const ordersSchema=SchemaFactory.createForClass(orders);

export interface Iorders extends Document{
    userId:users;
    status:string;
    total:string;
    createdAt:Date;
    orderItems:OrderItem[];
}