import { IsEmail, IsNotEmpty, MinLength,IsNumber} from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @MinLength(3)
  fierstName:string;

  @IsNotEmpty()
  @MinLength(3)
  lastName:string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(3)
  password: number;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(3)
  age:number;

  @IsNotEmpty()
  role: string; // 'admin' or 'customer'
}