import { Injectable } from '@nestjs/common';
import { TabArticle } from './artitcle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto, UpdateArticleDto } from './article.dto';
import { updateObj } from 'src/utils';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(TabArticle)
    private readonly aritcleRepository: Repository<TabArticle>,
  ) {}
  async findAll(publish_status, page, size) {
    let sqlStr = `SELECT * FROM tab_article`;
    const limit = size;
    const offset = (page - 1) * limit;
    if (publish_status !== 'all_') {
      sqlStr += ` WHERE publish_status='${publish_status}'`;
    }
    sqlStr += ` ORDER BY create_time DESC LIMIT ${offset}, ${limit}`;
    try {
      const data = await this.aritcleRepository.query(sqlStr);
      const total = await this.aritcleRepository.count({where: { publish_status }});
      return {
        data,
        total,
      }
    } catch (err) {
      return {
        errmsg: err,
      }
    }
    
  }
  findOne(id: number): Promise<TabArticle> {
    return this.aritcleRepository.findOneBy({ id });
  }
  create(createArticleDto: CreateArticleDto) {
    const article = new TabArticle();
    // article.title = createArticleDto.title;
    // article.content = createArticleDto.content;
    // article.author_id = createArticleDto.author_id;
    // article.category_id = createArticleDto.category_id;
    // article.tag_id = createArticleDto.tag_id;
    updateObj(createArticleDto, article);
    return this.aritcleRepository.save(article);
  }
  update(updateArticleDto: UpdateArticleDto) {
    return this.aritcleRepository
      .findOneBy({ id: updateArticleDto.id })
      .then((article) => {
        updateObj(updateArticleDto, article);
        return this.aritcleRepository.update(article.id, article);
      })
      .catch((error) => Promise.reject(error));
  }
  delete(id: number) {
    return this.aritcleRepository
      .findOneBy({ id })
      .then((article) => {
        return this.aritcleRepository.remove(article);
      })
      .catch((error) => Promise.reject(error));
  }
}
