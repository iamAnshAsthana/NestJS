import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import EmployeeService from './employees/employee.service';
import EmployeeController from './employees/employee.controller';
import { EmployeeModule } from './employees/employee.module';
import SalaryController from './salary/salary.controller';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [EmployeeModule, UsersModule],
  controllers: [AppController, EmployeeController, SalaryController, UsersController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
