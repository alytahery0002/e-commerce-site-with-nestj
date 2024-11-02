import {Prop,Schema,SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {orders} from './order.schema';
import {products} from '../../products/schema/product.schema';



@Schema()
export class OrderItem{
    @Prop()
    order:orders;

    @Prop()
    product:products;

    @Prop()
    quantity:string;

    @Prop()
    price:number;
}

export interface IorderItem extends Document{
    // order:Order;
    // product:product;
    quantity:string;
    price:number;
}