import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabCategory } from './category.entity';
import { CreateCateDto, UpdateCateDto } from './cate.dto';
import { updateObj } from 'src/utils';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(TabCategory)
    private readonly cateRepository: Repository<TabCategory>,
  ) {}
  findAll(): Promise<TabCategory[]> {
    return this.cateRepository.find();
  }
  findOne(id: number): Promise<TabCategory> {
    return this.cateRepository.findOneBy({ id });
  }
  create(createCateDto: CreateCateDto): Promise<TabCategory> {
    return this.cateRepository.save(createCateDto)
    .catch((error) => {
      return Promise.reject(error);
    });
  }
  update(updateCateDto: UpdateCateDto) {
    return this.cateRepository.update(updateCateDto.id, updateCateDto)      
    .catch((error) => {
      return Promise.reject(error);
    });
  }
  delete(id: number) {
    return this.cateRepository.delete({ id })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
