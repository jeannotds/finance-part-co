import { Body, Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  getProject(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.getProject(createProjectDto);
  }
}
