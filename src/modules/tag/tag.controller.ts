import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { wrapperResponse } from 'src/utils';
import { CreateTagDto, UpdateTagDto } from './tag.dto';
import { TagService } from './tag.service';
import { Public } from '../auth/public.decorator';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Public()
  @Get('')
  getAllArticles() {
    return wrapperResponse(this.tagService.findAll(), '获取Tag列表成功！');
  }
  @Public()
  @Get(':id')
  getArticle(@Param('id', ParseIntPipe) id: number) {
    return wrapperResponse(this.tagService.findOne(id), '获取Tag成功！');
  }
  @Post('')
  createArticle(@Body() body: CreateTagDto) {
    return wrapperResponse(this.tagService.create(body), '创建Tag成功！');
  }
  @Put('')
  updateArticle(@Body() body: UpdateTagDto) {
    return wrapperResponse(this.tagService.update(body), '修改Tag成功！');
  }
  @Delete(':id')
  deleteArtitcle(@Param('id', ParseIntPipe) id: number) {
    return wrapperResponse(this.tagService.delete(id), '删除Tag成功！');
  }
}
