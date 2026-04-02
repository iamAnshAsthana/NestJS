import { Injectable } from "@nestjs/common";

@Injectable()

export default class StudentService {
    show() {
        return "Show method of StudentService";
    }
    my(){
        return "My method of StudentService";
    }
}