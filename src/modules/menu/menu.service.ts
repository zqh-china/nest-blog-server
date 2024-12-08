import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabMenu } from './menu.entity';
import { menuList } from 'src/utils/menu';
import { CreateMenuDto, UpdateMenuDto } from './menu.dto';
import { updateObj } from 'src/utils';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(TabMenu)
    private readonly menusRepository: Repository<TabMenu>,
  ) {}
  findAll(active: string): Promise<TabMenu[]> {
    if (active) {
      return this.menusRepository.find({ where: { active: parseInt(active) } });
    }
    return this.menusRepository.find();
  }
  create(createMenuDto: CreateMenuDto) {
    return this.menusRepository.insert(createMenuDto);
  }
  update(updateMenuDto: UpdateMenuDto) {
    return this.menusRepository.update({ id: updateMenuDto.id }, updateMenuDto);
  }

  delete(id: number) {
    return this.menusRepository
      .findOneBy({ id })
      .then((menu) => {
        return this.menusRepository.delete({ id: menu.id });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  loadMenuFromFile() {
    return Promise.resolve(menuList);
  }
}
