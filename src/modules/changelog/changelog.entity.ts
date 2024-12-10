import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tab_changelog')
export class TabChangelog {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50, name: 'name' })
  name: string;

  @Column({ type: 'text', name: 'detail' })
  detail: string;

  @Column({ type: 'int', name: 'order' })
  order: number;
}