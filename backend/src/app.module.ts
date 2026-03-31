import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import EmployeeService from './employees/employee.service';
import EmployeeController from './employees/employee.controller';

@Module({
  imports: [],
  controllers: [AppController, EmployeeController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
