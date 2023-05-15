import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import comparePasswords from 'src/utils/bcript';

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
      console.log('user : ', user);
      if (!password) {
        return null;
      }
      const match = comparePasswords(password, user.password);
      console.log('match : ', match);
      if (match) {
        if (user) {
          return user;
        }
        return null;
      }
      return null;
    }
  }

  async login(user: any) {
    const payload = { email: user.email, id: user.id };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
