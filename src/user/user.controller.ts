import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('nest')
    async getNestNumberOfUsers(): Promise<number> {
        return this.userService.getNestNumberOfUsers();
    }

    @Get('mongoose')
    async getMongooseNumberOfUsers(): Promise<number> {
        return this.userService.getMongooseNumberOfUsers();
    }
}
