import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('tab_user')
export class TabUser {
  // id字段，对应数据库中的自增主键
  @PrimaryGeneratedColumn()
  id: number;

  // username字段，设置为非空且唯一，对应数据库中的varchar类型
  @Column({ type: 'varchar', length: 50, nullable: false })
  @Unique(['username'])
  username: string;

  // password字段，非空，对应数据库中的varchar类型
  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  // email字段，非空且唯一，对应数据库中的varchar类型
  @Column({ type: 'varchar', length: 100, nullable: false })
  @Unique(['email'])
  email: string;

  // phone_number字段，可空，对应数据库中的varchar类型
  @Column({ type: 'varchar', length: 20, nullable: true })
  phone_number: string | null;

  // create_time字段，默认值为当前时间戳，对应数据库中的timestamp类型
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  // is_active字段，默认值为true，对应数据库中的boolean类型
  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  // role字段，默认值为'user'，对应数据库中的varchar类型
  @Column({ type: 'varchar', length: 20, default: 'user' })
  role: string;

  @Column({ type: 'varchar', name: 'nickname', length: 100, nullable: false })
  nickname: string;

  @Column({ name: 'avatar', type: 'varchar', length: 50 })
  avatar: string;
}
