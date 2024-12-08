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
    const cate = new TabCategory();
    updateObj(createCateDto, cate);
    return this.cateRepository.save(cate);
  }
  update(updateCateDto: UpdateCateDto) {
    return this.cateRepository
      .findOneBy({ id: updateCateDto.id })
      .then((cate) => {
        updateObj(updateCateDto, cate);
        return this.cateRepository.update(cate.id, cate);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  delete(id: number) {
    return this.cateRepository
      .findOneBy({ id })
      .then((cate) => {
        return this.cateRepository.delete({ id: cate.id });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
