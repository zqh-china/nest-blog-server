import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TabUser } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(TabUser)
    private readonly usersRepository: Repository<TabUser>,
  ) {}

  findOne(id: number): Promise<TabUser> {
    return this.usersRepository.findOneBy({ id })
  }

  findAll(): Promise<TabUser[]> {
    return this.usersRepository.find();
  }

  create(createUserDto: CreateUserDto): Promise<TabUser> {
    const user = new TabUser();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    return this.usersRepository.save(user);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete({ id });
  }

  findByUsername(username: string) {
    return this.usersRepository.findOneBy({ username });
  }
}
