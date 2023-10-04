import {Controller, Post, Body, Get, Put, Param, Delete,UseInterceptors} from '@nestjs/common';
import {BooksService} from './books.service';
import {CreateBookDto} from './interfaces/book.interface';
import {BookDocument} from './schemas/book.schema';
import {IParamId} from "./interfaces/param.id";
import {UpdateBook} from "./interfaces/update.book";
import {LoggingInterceptor} from "../app.logging.interceptor";

@UseInterceptors(LoggingInterceptor)
@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) {
    }

    @Post()
    public create(@Body() body: CreateBookDto): Promise<BookDocument> {
        return this.bookService.create(body);
    }

    @Get()
    public getAll(): Promise<BookDocument[]> {
        console.log('get')
        return this.bookService.getAll();
    }

    @Put(':id')
    public update(
        @Param() {id}: IParamId,
        @Body() body: UpdateBook,
    ): Promise<BookDocument> {
        return this.bookService.update(id, body);
    }

    @Delete(':id')
    public delete(
        @Param() {id}: IParamId,
    ): Promise<BookDocument> {
        return this.bookService.deleteBook(id);
    }
}
