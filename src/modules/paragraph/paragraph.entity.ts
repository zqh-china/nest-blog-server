import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tab_paragraph')
export class TabParagraph {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'int', name: 'pid', nullable: false })
  pid: number;
  @Column({ type: 'int', name: 'p_order', nullable: false })
  p_order: number;
  @Column({ type: 'text', name: 'content' })
  content: string;
  @Column({ type: 'varchar', length: 10, name: 'type', default: 'text' })
  type: string;
}