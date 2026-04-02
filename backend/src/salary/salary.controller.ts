import {Body, Controller, Get, Post, Param} from '@nestjs/common';

@Controller('salary')
export default class SalaryController {
    @Get()
    index(): string {
        return 'Index Page of Salary';
    }
    @Post()
    create(@Body() {name, city}):string {
        return `Name: ${name}, City: ${city}`;
    }
    @Get(":name")
    show(@Param() {name}):string {
        return `Show function ${name}`;
    }
}