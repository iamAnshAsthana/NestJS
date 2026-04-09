import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';

TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port:3306,
  username: 'root',
  password: '',
  database: 'nestjs_mern',
  autoLoadEntities: true,
  synchronize: false
});
@Module({
  imports: [TypeOrmModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
