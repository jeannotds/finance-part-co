import { IsEmail, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsString()
  firstname: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
