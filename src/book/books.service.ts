import { Model, Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Book, BookDocument } from "./schemas/book.schema";
import { CreateBookDto } from "./interfaces/book.interface";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<Book>,
    @InjectConnection() private connection: Connection,
  ) {}
  private readonly books: Book[] = [];

  create(date: CreateBookDto):Promise<BookDocument> {
    const book = new this.BookModel(date);
    return book.save();
  }
  //
  // findAll(): Book[] {
  //   return this.books;
  // }
}
