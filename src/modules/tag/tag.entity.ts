import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('tab_tag')
export class TabTag extends BaseEntity {
  // 对应表中的自增主键id字段
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  // 对应表中的name字段，设置为不可为空，类型为varchar
  @Column({ type: 'varchar', length: 255, name: 'label', nullable: false })
  name: string;

  // 对应表中的description字段，可空，默认值为空字符串，类型为varchar
  @Column({
    type: 'varchar',
    length: 255,
    name: 'desc',
    nullable: true,
    default: '',
  })
  description: string;
  @Column({ type: 'varchar', length: 25, name: 'antd_color' })
  color: string;
}
