import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabTag } from './tag.entity';

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [TypeOrmModule.forFeature([TabTag])],
  exports: [TagService],
})
export class TagModule {}
