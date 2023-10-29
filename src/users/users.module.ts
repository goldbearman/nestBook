import {forwardRef, Module} from '@nestjs/common';
import {UsersService} from "./users.service";
import {UsersController} from './users.controller';
import {AuthModule} from "../auth/auth.module";
import {AuthService} from "../auth/auth.service";
import {JwtService} from "@nestjs/jwt";

@Module({
    imports:[forwardRef(() =>AuthModule)],
    providers: [UsersService,AuthService,JwtService],
    exports: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {
}
