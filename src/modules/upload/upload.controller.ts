import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
  Get,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { TabUpload } from './upload.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { wrapperResponse } from '../../utils';
import { UploadService } from './upload.service';
import { Public } from '../auth/public.decorator';

@Controller('upload')
export class UploadController {
  constructor(
    @InjectRepository(TabUpload)
    private readonly uploadRepository: Repository<TabUpload>,
    private readonly uploadService: UploadService,
  ) {}
  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '../uploads', // 文件存储的目标文件夹，可根据实际情况修改
        filename: (req, file, cb) => {
          const uniqueSuffix = uuidv4();
          const fileExtension = path.extname(file.originalname);
          cb(null, `${uniqueSuffix}${fileExtension}`);
        },
      }),
      limits: {
        fileSize: 2 << 20, // 2MB上传大小限制
      },
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      // 如果文件为空（可能是因为超出大小限制等原因被拦截了），抛出异常
      throw new HttpException('文件过大，超过2MB限制', HttpStatus.BAD_REQUEST);
    }
    const newAttachment = new TabUpload();
    newAttachment.file_name = file.filename;
    newAttachment.file_size = file.size;
    newAttachment.mime_type = file.mimetype;
    newAttachment.file_path = path.join(
      __dirname,
      '..',
      'uploads',
      file.filename,
    );

    try {
      await this.uploadRepository.save(newAttachment);
      return {
        code: 0,
        message: '文件上传成功',
        fileName: file.filename,
      };
    } catch (error) {
      // 如果保存到数据库出现错误，抛出相应异常告知客户端
      throw new HttpException(
        '文件上传成功，但写入数据库失败',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Public()
  @Get('')
  getImages() {
    return wrapperResponse(this.uploadService.findAll(), '获取图片成功！');
  }
  @Delete(':id')
  delImage(@Param('id', ParseIntPipe) id: number) {
    return wrapperResponse(this.uploadService.delImage(id), '删除图片成功！'); 
  }
}
