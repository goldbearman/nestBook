import {Injectable} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService{
    constructor(private userService: UsersService,private jwtService: JwtService) {}

    // async validateUser(username:string, pass: string): Promise<any>{
    //     const user = await this.userService.findOne(username);
    //     if(user && user.password === pass){
    //         const {password, ...result} = user;
    //         return result;
    //     }
    //     return null;
    // }

    async validateUser(id: number): Promise<any> {
        const user = await this.userService.findOne(id);
        if (user) {
            return user;
        }
        return null;
    }

    createToken(payload:any){
        return this.jwtService.sign(payload);
    }
}