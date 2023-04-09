import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsString()
  firstname: string;
  @IsString()
  lastname: string;
  @IsString()
  adress: string;
  @IsString()
  password: string;
  @IsString()
  email: string;
  @IsNumber()
  contact: number;
  @IsString()
  image: string;
}
