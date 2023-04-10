import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { encodePassword } from 'src/utils/bcript';
import { CreateCatDto } from './dto/create-cat.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  postUser(@Body() createCatDto: CreateCatDto) {
    const password = encodePassword(createCatDto.password);
    if (createCatDto.name == '') return { message: " Name can't be empty!" };
    else if (createCatDto.lastname == '')
      return { message: " Lastname can't be empty!" };
    else if (createCatDto.firstname == '')
      return { message: " Firstname can't be empty!" };
    else if (createCatDto.adress == '')
      return { message: " Adress can't be empty!" };
    else if (createCatDto.password == '')
      return { message: " Password can't be empty!" };
    else if (createCatDto.email == '')
      return { message: "Email can't be empty!" };
    else if (!createCatDto.contact == null)
      return { message: "Contact can't be empty!" };
    else if (createCatDto.image == '')
      return { message: "Image can't be empty!" };
    else return this.userService.create({ ...createCatDto, password });
  }

  @Delete('/:id')
  deleteUser(@Param() param: { id: number }) {
    return this.userService.delete(param);
  }

  @Get('/:id')
  getUser(@Param() param: { id: number }) {
    return this.userService.getOne(param);
  }

  @Put('/:id')
  updateUser(
    @Body() createCatDto: CreateCatDto,
    @Param() param: { id: number },
  ) {
    const password = encodePassword(createCatDto.password);
    if (createCatDto.name == '') return { message: " Name can't be empty!" };
    else if (createCatDto.lastname == '')
      return { message: " Lastname can't be empty!" };
    else if (createCatDto.firstname == '')
      return { message: " Firstname can't be empty!" };
    else if (createCatDto.adress == '')
      return { message: " Adress can't be empty!" };
    else if (createCatDto.password == '')
      return { message: " Password can't be empty!" };
    else if (createCatDto.email == '')
      return { message: "Email can't be empty!" };
    else if (!createCatDto.contact == null)
      return { message: "Contact can't be empty!" };
    else if (createCatDto.image == '')
      return { message: "Image can't be empty!" };
    else return this.userService.update({ ...createCatDto, password }, param);
  }
}
