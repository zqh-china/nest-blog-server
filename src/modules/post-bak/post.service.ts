import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TabPost } from "./post.entity";
import { Repository } from "typeorm";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(TabPost)
    private readonly postRepository: Repository<TabPost>,
  ) {}

  async findAll(publish_status, page, size) {
    let sqlStr = 'SELECT * FROM tab_article';
    const limit = size;
    const offset = (page - 1) * limit;
    let total = 0;
    if (publish_status !== 'all_') {
      sqlStr += ` WHERE publish_status='${publish_status}'`;
      total = await this.postRepository.count({ where: { publish_status } });
    } else {
      total = await this.postRepository.count();
    }
    sqlStr += ` ORDER BY create_time DESC LIMIT ${offset}, ${limit}`;
    const data = await this.postRepository.query(sqlStr);
    return {
        data,
        total,
    }
    
  }

}