import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  postUser(@Body() body: any) {
    return this.userService.create(body);
  }

  @Delete('/:id')
  deleteUser(@Param() param: { id: number }) {
    return this.userService.delete(param);
  }

  @Get('/:id')
  getUser(@Param() param: { id: number }) {
    return this.userService.getOne(param);
  }

  @Put('/:id')
  updateUser(@Body() body: any, @Param() param: { id: number }) {
    return this.userService.update(body, param);
  }
}
