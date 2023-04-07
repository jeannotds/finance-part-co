import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUser(): Promise<User[]> {
    return this.userRepository.find();
  }
  //   postUser() {
  //     return { name: 'Jack', prenom: 'Bemba' };
  //   }
}
