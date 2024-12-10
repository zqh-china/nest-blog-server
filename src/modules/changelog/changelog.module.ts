import { Module } from '@nestjs/common';
import { ChangelogController } from './changelog.controller';
import { ChangelogService } from './changelog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabChangelog } from './changelog.entity';

@Module({
  controllers: [ChangelogController],
  providers: [ChangelogService],
  imports: [TypeOrmModule.forFeature([TabChangelog])],
})
export class ChangelogModule {}
