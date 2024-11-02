import { IsEmail,IsString,IsNumber, IsNotEmpty, MinLength } from 'class-validator';

export class CreateAuthDto {

    id:string

    @IsNotEmpty()
    @IsString()
    fierstName:string;

    @IsNotEmpty()
    @IsNumber()
    password:number;

    @IsNotEmpty()
    @IsString()
    lastName:string;

    @IsNotEmpty()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsNumber()
    age:number;

    @IsNotEmpty()
    @IsString()
    role: string; // 'admin' or 'customer'
}
