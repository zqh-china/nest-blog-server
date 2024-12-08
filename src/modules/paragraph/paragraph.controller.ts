import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ParagraphService } from './paragraph.service';
import { wrapperResponse } from '../../utils';
import { Public } from '../auth/public.decorator';

@Controller('paragraph')
export class ParagraphController {
  constructor(private readonly paragraphService: ParagraphService) {}
  @Public()
  @Get('')
  getAllParagraph() {
    return wrapperResponse(this.paragraphService.findAll(), '获取段落列表成功');
  }
  @Public()
  @Get(':id')
  getArticle(@Param('id', ParseIntPipe) id: number) {
    return wrapperResponse(this.paragraphService.findAllByArticleID(id), '获取文章段落成功');
  }
}
