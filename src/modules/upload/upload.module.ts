import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabUpload } from './upload.entity';

@Module({
  providers: [UploadService],
  controllers: [UploadController],
  imports: [TypeOrmModule.forFeature([TabUpload])],
})
export class UploadModule {}
