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

  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  getOne(param: { id: number }) {
    return this.userRepository.findOne({ where: param });
  }

  create(body: any) {
    return this.userRepository.save(body);
  }

  delete(param: { id: number }) {
    return this.userRepository.delete(param);
  }

  update(body: any, param: { id: number }) {
    return this.userRepository.update(param, body);
  }
}
