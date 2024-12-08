import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import { wrapperResponse } from 'src/utils';
import { CreateMenuDto, UpdateMenuDto } from './menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('')
  getMenus(@Query('active') active) {
    // console.log('active:', active);
    return wrapperResponse(
      this.menuService.findAll(active),
      '获取菜单列表成功！',
    );
  }

  @Post('')
  createMenu(@Body() body: CreateMenuDto) {
    // console.log('body', body);
    return wrapperResponse(this.menuService.create(body), '新增菜单成功！');
  }

  @Put('')
  updateMenu(@Body() body: UpdateMenuDto) {
    // console.log(body);
    // return {
    //   code: 0,
    //   result: [],
    //   message: '修改菜单成功',
    // };
    return wrapperResponse(this.menuService.update(body), '修改菜单成功！');
  }

  @Delete('')
  deleteMenu(@Body() param) {
    console.log('delete id', param);
    return wrapperResponse(this.menuService.delete(param.id), '删除菜单成功！');
  }

  @Get('list')
  getMenusFromFile() {
    return wrapperResponse(
      this.menuService.loadMenuFromFile(),
      '获取菜单配置文件成功！',
    );
  }
}
