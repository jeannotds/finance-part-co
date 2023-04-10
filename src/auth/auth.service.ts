import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
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
}
