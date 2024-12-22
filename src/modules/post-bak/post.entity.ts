import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('tab_post')
export class TabPost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;
  @Column({ name: 'author_id' })
  author_id: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;
  @Column({ type: 'timestamp', nullable: true, onUpdate: 'CURRENT_TIMESTAMP' })
  update_time: Date | null;
  @Column({
    type: 'enum',
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
  })
  publish_status: 'draft' | 'published' | 'archived';
  @Column({ name: 'category_id' })
  category_id: number;

  @Column({ name: 'tags', type: 'varchar', length: 50, nullable: true })
  tags: string;

  @Column({ name: 'desc', type: 'text', nullable: true })
  desc: string | null;
  @Column({ name: 'content', type: 'text' })
  content: string;
}
