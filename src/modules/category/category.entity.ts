import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('tab_category')
export class TabCategory {
  // id字段，对应数据库中的自增主键
  @PrimaryGeneratedColumn()
  id: number;

  // name字段，非空且唯一，对应数据库中的varchar类型
  @Column({ type: 'varchar', name: 'label', length: 50, nullable: false })
  @Unique(['label'])
  name: string;

  // description字段，可空，对应数据库中的varchar类型
  @Column({ type: 'varchar', length: 255, nullable: true, name: 'desc' })
  description: string | null;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'color' })
  color: string;
}
