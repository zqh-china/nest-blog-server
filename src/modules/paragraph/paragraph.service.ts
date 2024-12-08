import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabParagraph } from './paragraph.entity';

@Injectable()
export class ParagraphService {
  constructor(
    @InjectRepository(TabParagraph)
    private readonly paragraphRepository: Repository<TabParagraph>,
  ) {}
  findAll(): Promise<TabParagraph[]> {
    return this.paragraphRepository.find();
  }
  // findOne(id: number): Promise<TabParagraph> {
  //   return this.paragraphRepository.findOneBy({ id });
  // }
  findAllByArticleID(pid: number): Promise<TabParagraph[]> {
    return this.paragraphRepository.query(
      `SELECT * FROM tab_paragraph WHERE pid = ${pid} ORDER BY p_order`,
    );
  }
}
