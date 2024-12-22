import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { wrapperResponse } from '../../utils';
import { Public } from '../auth/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('info')
  getUserByToken(@Req() request) {
    return wrapperResponse(
      this.userService.findOne(request.user.userid),
      '请求用户信息成功！',
    );
  }
  @Get('')
  getUsers() {
    return this.userService.findAll();
  }
  @Public()
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
  @Post()
  createUser(@Body() body) {
    return this.userService.create(body);
  }

  @Delete(':id')
  removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
