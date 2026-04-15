import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'mysql',
  username: 'root',
  password: '',
  database: 'nestjs_mern',
  port: 3306,
  host: 'localhost',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
});