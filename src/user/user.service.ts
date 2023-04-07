import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return { name: 'Diambu', prenom: 'Jeannot' };
  }
  postUser() {
    return { name: 'Jack', prenom: 'Bemba' };
  }
}
