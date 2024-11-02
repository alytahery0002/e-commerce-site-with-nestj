import {IsNotEmpty,IsNumber,IsString} from 'class-validator';

export class createBrands{

    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    description:string;
    
}
