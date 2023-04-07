import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
}
