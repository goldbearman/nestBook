import { Module } from '@nestjs/common';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "./auth.service";
import {LocalStrategy} from "./local.strategy";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports:[
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.SEKRET_KEY,
            signOptions:{expiresIn: '60s'}
        })
    ],
    providers:[AuthService,LocalStrategy,JwtStrategy]

})
export class AuthModule {}
