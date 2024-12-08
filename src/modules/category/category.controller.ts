import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { wrapperResponse } from '../../utils';
import { Public } from '../auth/public.decorator';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Public()
  @Get('')
  getAllCategories() {
    return wrapperResponse(
      this.categoryService.findAll(),
      '获取所有分类成功！',
    );
  }
  @Public()
  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return wrapperResponse(this.categoryService.findOne(id), '获取分类成功!');
  }

  @Post()
  createCategory(@Body() body) {
    return wrapperResponse(this.categoryService.create(body), '添加分类成功!');
  }

  @Put()
  updateCategory(@Body() body) {
    return wrapperResponse(this.categoryService.update(body), '修改分类成功!');
  }

  @Delete('/:id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return wrapperResponse(this.categoryService.delete(id), '删除分类成功!');
  }
}
