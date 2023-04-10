import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    if (loginDto.password == '') {
      return { message: "Password can't be empty!" };
    } else if (loginDto.email == '') {
      return { message: "Email can't be empty!" };
    } else {
      const user = await this.userService.findByEmail(loginDto.email);
      if (user) {
        if (user.password === loginDto.password) {
          return user;
        }
        return { message: 'Password incorrect' };
      }
      return { message: 'unauthenfication' };
    }
  }
}
