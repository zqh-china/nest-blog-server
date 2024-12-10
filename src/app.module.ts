import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ArticleModule } from './modules/article/article.module';
import { CategoryModule } from './modules/category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { getProjectConfig } from './utils';
import { MenuModule } from './modules/menu/menu.module';
import { TagModule } from './modules/tag/tag.module';
import { ParagraphModule } from './modules/paragraph/paragraph.module';
import { UploadModule } from './modules/upload/upload.module';
import { ChangelogModule } from './modules/changelog/changelog.module';

const env = 'dev';

const username = getProjectConfig('username', env);
const password = getProjectConfig('password', env);
const host = getProjectConfig('host', env);
const database = getProjectConfig('database', env);
const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host,
  port: 3306,
  username,
  password,
  database,
  synchronize: false,
  autoLoadEntities: true,
  logging: true,
};

// console.log(dbConfig);
// console.log(__dirname);

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UserModule,
    AuthModule,
    ArticleModule,
    CategoryModule,
    MenuModule,
    TagModule,
    ParagraphModule,
    UploadModule,
    ChangelogModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, 'uploads'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
