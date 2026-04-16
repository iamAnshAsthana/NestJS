import { DataSource } from "typeorm";
import { Category } from './category/category.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  username: 'root',
  password: '',
  database: 'nestjs_mern',
  port: 3306,
  host: 'localhost',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
});