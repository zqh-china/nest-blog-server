import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TabChangelog } from './changelog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChangelogService {
  constructor(
    @InjectRepository(TabChangelog)
    private readonly changelogRepository: Repository<TabChangelog>,
  ) {}
  findAll() {
    return this.changelogRepository.find({
      order: {
        order: 'DESC',
      },
    });
  }
}
