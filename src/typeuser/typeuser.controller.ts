import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateTypeuserDto } from './dto/create-typeuser.dto';

@Controller('typeuser')
export class TypeuserController {
  @Post()
  async create(@Body() createTypeuserDto: CreateTypeuserDto) {
    // this.catsService.create(createTypeuserDto);
  }
}
