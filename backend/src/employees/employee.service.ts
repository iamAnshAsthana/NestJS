import { Injectable } from "@nestjs/common";

@Injectable()

export default class EmployeeService {
    see(){
        return "See method of EmployeeService";
    }
    listen(){
        return "Listen method of EmployeeService";
    }
}