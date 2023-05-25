import { IsString } from 'class-validator';

export class CreateTypeuserDto {
  @IsString()
  name: string;
}
