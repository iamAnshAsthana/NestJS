import {Controller, Get} from '@nestjs/common';
import StudentService from './student.service';

@Controller('/students')

export class StudentController {
    constructor(private stuDetails: StudentService){}
    @Get()
    studentDetails() {
        return this.stuDetails.show();
    }
    @Get('/my')
    myDetails() {
        return this.stuDetails.my();
    }
}