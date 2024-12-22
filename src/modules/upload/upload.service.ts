import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TabUpload } from './upload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(TabUpload)
    private readonly uploadRepository: Repository<TabUpload>,
  ) {}
  findAll(): Promise<TabUpload[]> {
    return this.uploadRepository.find();
  }

  delImage(id: number) {
    return this.uploadRepository.delete({id});
  }
}
