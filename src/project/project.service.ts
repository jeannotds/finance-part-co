import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entity/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  getProject(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  create(createProjectDto: CreateProjectDto) {
    return this.projectRepository.save(createProjectDto);
  }
}
