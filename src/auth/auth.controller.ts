import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() loginDto: any) {
    return this.authService.validateUser(loginDto.email, loginDto.password);
  }
}

/*
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
    */
