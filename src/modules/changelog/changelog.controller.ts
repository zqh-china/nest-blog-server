import { Controller, Get } from '@nestjs/common';
import { ChangelogService } from './changelog.service';
import { Public } from '../auth/public.decorator';
import { wrapperResponse } from '../../utils';

@Controller('changelog')
export class ChangelogController {
  constructor(private readonly changelogService: ChangelogService) {}
  @Public()
  @Get()
  getAllChangelog() {
    return wrapperResponse(this.changelogService.findAll(), '获取更新记录成功');
  }
}
