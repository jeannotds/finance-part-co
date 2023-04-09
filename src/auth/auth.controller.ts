import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (user) {
      if (user.password === loginDto.password) {
        return user;
      }
    }
    return { message: 'unauthenfication' };
  }
}
