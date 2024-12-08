import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tab_menu') // 指定对应的数据库表名
export class TabMenu {
  // id字段，自增主键
  @PrimaryGeneratedColumn()
  id: number;

  // 菜单名称字段，不能为空，最大长度50个字符
  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  // 菜单对应的路由路径字段，可为空，最大长度100个字符
  @Column({ type: 'varchar', length: 100 })
  path: string;

  // 权限标识字段，可为空，最大长度50个字符
  @Column({ type: 'varchar', length: 50 })
  roles: string;

  // 重定向路径字段，可为空，最大长度100个字符
  @Column({ type: 'varchar', length: 100 })
  redirect: string;

  // 菜单图标对应的类名或图片路径等字段，可为空，最大长度50个字符
  @Column({ type: 'varchar', length: 50 })
  icon: string;

  // 菜单的标题字段，可为空，最大长度100个字符
  @Column({ type: 'varchar', length: 100 })
  title: string;

  // 菜单排序序号字段，默认值为0
  @Column({ type: 'int', default: 0 })
  orderNo: number;

  // 父菜单的id字段，可为空
  @Column({ type: 'int', nullable: true })
  pid: number;

  // 是否是当前激活状态字段，默认值为0（表示未激活）
  @Column({ type: 'tinyint', width: 1, default: 0 })
  active: number;
  
  @Column({ type: 'varchar', length: 255 })
  meta: string;

  @Column({ type: 'tinyint', width: 1, default: 1 })
  hideChildrenInMenu: number;
  @Column({ type: 'tinyint', width: 1, default: 0 })
  hideMenu: number;
}
