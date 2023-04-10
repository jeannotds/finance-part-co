import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string) {
    if (password == '') {
      return { message: "Password can't be empty!" };
    } else if (email == '') {
      return { message: "Email can't be empty!" };
    } else {
      const user = await this.userService.findByEmail(email);
      if (user && user.password === password) {
        return user;
      }
      return null;
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
