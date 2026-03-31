import { Controller, Get } from "@nestjs/common";
import EmployeeService from "./employee.service";

@Controller('/emp')
export default class EmployeeController {
    constructor(private readonly empsv:EmployeeService){}

    @Get()
    show(){
        return this.empsv.see();
    }
    @Get('/my')
    my(){
        return this.empsv.listen();
    }
}