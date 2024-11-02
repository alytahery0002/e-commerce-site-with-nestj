import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose';
 
@Schema()
export class Categories {
   @Prop()
   name: string;
   @Prop()
   products: number;
   @Prop()
   price: number;
   @Prop()
   brands: string;
//    @Prop()
//    marks: number;
}
export const CategoriesSchema = SchemaFactory.createForClass(Categories);


export interface ICategories extends Document{
     name: string;
     category: number;
     price: number;
     brands: string;
}