import { Controller, Get } from "@nestjs/common";
import salService from "./salary.service";

@Controller('salary')
class SalaryController {
    constructor(private readonly salService: salService) {}
    @Get()
    getSalary() {
        return this.salService.getSalary();
    }
    @Get('/details')
    getSalaryDetails() {
        return this.salService.getSalaryDetails();
    }
}
export default SalaryController;