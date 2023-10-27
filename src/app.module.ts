import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BooksModule} from './book/books.module';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';


@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_CONNECTION),
        BooksModule,
        AuthModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService, UsersService, UsersService],
})
export class AppModule {
}
