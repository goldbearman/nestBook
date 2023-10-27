import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {UsersService} from "./users.service";
import {AuthService} from "../auth/auth.service";
import {JwtAuthGuard} from "../auth/jwt.auth.guard";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService,private readonly authService: AuthService) {
    }

    // @UseGuards(AuthGuard('local'))
    // @Post('/login')
    // async login(@Request() req){
    //     return req.user;
    // }

    @UseGuards(JwtAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        return req.user;
    }

    @Get('/token')
    getToken():string{
        return this.authService.createToken({id: 2});
    }
}
