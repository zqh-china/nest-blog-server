import { Controller, Get, Post, Put, Body, Param, ParseIntPipe, Delete, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { wrapperResponse } from 'src/utils';
import { CreateArticleDto, UpdateArticleDto } from './article.dto';
import { Public } from '../auth/public.decorator';
import { waitForDebugger } from 'inspector';
const publishLists = ['published', 'draft', 'archived', 'all_'];

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Public()
  @Get('')
  async getAllArticles(
    @Query('publish_status') publish_status: string, 
    @Query('page', ParseIntPipe) page?: number, 
    @Query('size', ParseIntPipe) size?: number) {
    if (!publishLists.includes(publish_status)) {  // 
      return wrapperResponse(Promise.reject('不支持的类型'), '');
    }
    page = page ?? 1;
    size = size ?? 4;
    const res = await this.articleService.findAll(publish_status, page, size);
    if (res.errmsg) return { code: -1, msg: res.errmsg, result: {data: [], total: 0}}
    return {
      code: 200,
      msg: 'success',
      result: {
        data: res.data,
        total: res.total
      }
    }
  }
  @Public()
  @Get(':id')
  getArticle(@Param('id', ParseIntPipe) id: number) {
    return wrapperResponse(this.articleService.findOne(id), '获取文章成功！');
  }
  @Post('')
  createArticle(@Body() body: CreateArticleDto) {
    return wrapperResponse(this.articleService.create(body), '创建文章成功！');
  }
  @Put('')
  updateArticle(@Body() body: UpdateArticleDto) {
    return wrapperResponse(this.articleService.update(body), '修改文章成功！');
  }
  @Delete(':id')
  deleteArtitcle(@Param('id', ParseIntPipe) id: number) {
    return wrapperResponse(this.articleService.delete(id), '删除文章成功！');
  }
}
