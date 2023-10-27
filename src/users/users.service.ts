import {Injectable} from '@nestjs/common';
import {User} from "../book/schemas/user.schema";
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Book} from "../book/schemas/book.schema";
import {Connection, Model} from "mongoose";

@Injectable()
export class UsersService {
    // constructor(
    //     @InjectModel(User.name) private UserModel: Model<User>,
    //     @InjectConnection() private connection: Connection,
    // ) {
    // }

    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];


    // async findOne(username: string): Promise<User> {
    //     return this.users.find(user => user.userId === id);
    // }

    async findOne(id: number): Promise<User> {
        return this.users.find(user => user.userId === id);
    }
}
