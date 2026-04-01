import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import EmployeeService from './employees/employee.service';
import EmployeeController from './employees/employee.controller';
import { EmployeeModule } from './employees/employee.module';
import { SalaryModule } from './salary/salary.module';

@Module({
  imports: [EmployeeModule, SalaryModule],
  controllers: [AppController, EmployeeController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
