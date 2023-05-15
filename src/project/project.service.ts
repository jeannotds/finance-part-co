import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entity/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    private userService: UserService,
  ) {}

  getProject(): Promise<Project[]> {
    return this.projectRepository.find({
      relations: {
        user: true,
      },
    });
  }

  create(createProjectDto: CreateProjectDto) {
    return this.projectRepository.save(createProjectDto);
  }
}
