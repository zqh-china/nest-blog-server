import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabCategory } from './category.entity';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [TypeOrmModule.forFeature([TabCategory])],
  exports: [CategoryService],
})
export class CategoryModule {}
