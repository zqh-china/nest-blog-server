import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { Public } from './public.decorator';
import { AuthService } from './auth.service';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';
import { success, wrapperResponse } from 'src/utils';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Public()
  @UseFilters(new HttpExceptionFilter())
  async login(@Body() params) {
    return wrapperResponse(this.authService.login(params.username, params.password), '登录成功！')
  }
  //
  // @Post('md5password')
  // @Public()
  // @UseFilters(new HttpExceptionFilter())
  // async md5password(@Body() params) {
  //   const
  // }
}
