import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  getProject() {
    return this.projectService.getProject();
  }

  @Post()
  postProject(@Body() createProjectDto: CreateProjectDto) {
    if (!createProjectDto.name) return { message: "Project can't be empty!" };
    if (!createProjectDto.description)
      return { message: "Description can't be empty!" };
    if (!createProjectDto.residence)
      return { message: "Residence can't be empty!" };
    if (!createProjectDto.telephone)
      return { message: "telephone number can't be empty!" };
    return this.projectService.create(createProjectDto);
  }
}
