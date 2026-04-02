import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import EmployeeService from './employees/employee.service';
import EmployeeController from './employees/employee.controller';
import { EmployeeModule } from './employees/employee.module';
import { StudentModule } from './students/student.module';
import SalaryController from './salary/salary.controller';

@Module({
  imports: [EmployeeModule, StudentModule],
  controllers: [AppController, EmployeeController, SalaryController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
