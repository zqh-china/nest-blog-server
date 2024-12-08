import { Module } from '@nestjs/common';
import { ParagraphService } from './paragraph.service';
import { ParagraphController } from './paragraph.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabParagraph } from './paragraph.entity';

@Module({
  providers: [ParagraphService],
  controllers: [ParagraphController],
  imports: [TypeOrmModule.forFeature([TabParagraph])],
  exports: [ParagraphService],
})
export class ParagraphModule {}
