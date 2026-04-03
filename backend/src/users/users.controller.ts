import { Controller, Get, Post, Body, Param } from "@nestjs/common";

@Controller('users')

export class UsersController {
    @Get()
    all() {
        return "All users";
    }
    @Post()
    getUser(@Body() {name}):string {
        return `User name: ${name}`;
    }
    @Get(":name")
    getUserById(@Param() {name}):string {
        return `User name in url: ${name}`;
    }
}