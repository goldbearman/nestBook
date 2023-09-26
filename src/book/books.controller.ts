import { Controller, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './interfaces/book.interface';
import { BookDocument } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  public create(@Body() body: CreateBookDto): Promise<BookDocument> {
    // const book = new RomantickBook('Война и мир');
    // this.bookService.create(book);
    // return this.bookService.findAll()[0];
    return this.bookService.create(body);
  }
}
