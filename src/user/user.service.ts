import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
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

  create(createCatDto: CreateCatDto) {
    return this.userRepository.save(createCatDto);
  }

  delete(param: { id: number }) {
    return this.userRepository.delete(param);
  }

  update(createCatDto: CreateCatDto, param: { id: number }) {
    return this.userRepository.update(param, createCatDto);
  }

  //Find User By Email
  //findOne
  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  findByContact(contact: number) {
    return this.userRepository.findOne({ where: { contact } });
  }
}
