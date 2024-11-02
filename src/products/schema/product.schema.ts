import * as mongoose from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose';

@Schema()
export class products {
   @Prop()
   name: string;
   @Prop()
   description: string;
   @Prop()
   price: number;
   @Prop()
   sku: string;
}
 
export const productsSchema = SchemaFactory.createForClass(products);

// export const productsSchema = new mongoose.Schema({
//    name: String,
//    category: String,
//    price: Number,
//    brands: String,   
// //    @Prop()
// //    marks: number;
// })

export interface Iproducts extends Document{
     name: string;
     description: number;
     price: number;
     sku: string;
}