import { Injectable } from "@nestjs/common";

@Injectable()
export default class SalaryService {
    getSalary(){
        return "Getting salary information";
    }
    getSalaryDetails() {
        return "Getting salary details";
    }
}