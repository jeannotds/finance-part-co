import { IsNumber, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  residence: string;

  @IsNumber()
  telephone: number;
}
