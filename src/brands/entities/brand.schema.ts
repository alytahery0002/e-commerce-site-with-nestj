import{Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from "mongoose";
import { Document } from 'mongoose';

@Schema()
export class brands{

    @Prop()
    title:string;

    @Prop()
    description:string;
    
}

export const brandSchema=SchemaFactory.createForClass(brands)

export interface Ibrands extends Document{
    title:string,
    description:string
}