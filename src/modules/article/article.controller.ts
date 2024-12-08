import { Controller, Get, Post, Put, Body, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { wrapperResponse } from 'src/utils';
import { CreateArticleDto, UpdateArticleDto } from './article.dto';
import { Public } from '../auth/public.decorator';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Public()
  @Get('')
  getAllArticles() {
    return wrapperResponse(this.articleService.findAll(), '获取文章列表成功！');
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
