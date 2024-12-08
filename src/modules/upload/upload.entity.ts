import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tab_attachments')
export class TabUpload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_name: string;

  @Column()
  mime_type: string;

  @Column()
  file_path: string;

  @Column()
  file_size: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  upload_time: Date;
}
