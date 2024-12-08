import { Injectable } from '@nestjs/common';
import { TabTag } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { updateObj } from 'src/utils';
import { CreateTagDto, UpdateTagDto } from './tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TabTag)
    private readonly tagRepository: Repository<TabTag>,
  ) {}
  findAll(): Promise<TabTag[]> {
    return this.tagRepository.find();
  }
  findOne(id: number): Promise<TabTag> {
    return this.tagRepository.findOneBy({ id });
  }
  create(CreateTagDto: CreateTagDto) {
    const tag = new TabTag();
    updateObj(CreateTagDto, tag);
    return this.tagRepository.save(tag);
  }
  update(UpdateTagDto: UpdateTagDto) {
    return this.tagRepository
      .findOneBy({ id: UpdateTagDto.id })
      .then((tag) => {
        updateObj(UpdateTagDto, tag);
        return this.tagRepository.update(tag.id, tag);
      })
      .catch((error) => Promise.reject(error));
  }
  delete(id: number) {
    return this.tagRepository
      .findOneBy({ id })
      .then((tag) => {
        return this.tagRepository.remove(tag);
      })
      .catch((error) => Promise.reject(error));
  }
}
