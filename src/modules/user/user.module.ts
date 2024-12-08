import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabUser } from './user.entity';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([TabUser])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
