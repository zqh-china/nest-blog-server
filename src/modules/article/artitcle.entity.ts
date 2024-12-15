import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TabUser } from '../user/user.entity';
import { TabCategory } from '../category/category.entity'; // 引入对应的分类实体类，需根据实际路径调整

@Entity('tab_article')
export class TabArticle {
  // id字段，对应数据库中的自增主键
  @PrimaryGeneratedColumn()
  id: number;

  // title字段，非空，对应数据库中的varchar类型
  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  // content字段，对应数据库中的text类型，可存储大量文本内容
  // @Column({ type: 'text' })
  // content: string;

  // author_id字段，通过外键关联到tab_user表的id字段，这里使用ManyToOne关系表示多对一关联
  // @ManyToOne(() => TabUser, (user) => user.articles)
  // @JoinColumn({ name: 'author_id' })
  // author: TabUser;
  @Column({ name: 'author_id' })
  author_id: number;

  // create_time字段，默认值为当前时间戳，对应数据库中的timestamp类型
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  // update_time字段，对应数据库中的timestamp类型，更新时可自动更新为当前时间戳，可空
  @Column({ type: 'timestamp', nullable: true, onUpdate: 'CURRENT_TIMESTAMP' })
  update_time: Date | null;

  // publish_status字段，使用枚举类型，对应数据库中的ENUM类型，有三种状态，默认是'draft'
  @Column({
    type: 'enum',
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
  })
  publish_status: 'draft' | 'published' | 'archived';

  // category_id字段，通过外键关联到tab_category表的id字段，同样是多对一关联
  // @ManyToOne(() => TabCategory, (category) => category.articles)
  // @JoinColumn({ name: 'category_id' })
  // category: TabCategory;
  @Column({ name: 'category_id' })
  category_id: number;

  @Column({ name: 'tags', type: 'varchar', length: 50, nullable: true })
  tags: string;

  @Column({ name: 'desc', type: 'text', nullable: true })
  desc: string | null;
}
