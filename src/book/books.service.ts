import { Model, Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Book, BookDocument } from "./schemas/book.schema";
import { CreateBookDto } from "./interfaces/book.interface";
import {UpdateBook} from "./interfaces/update.book";


@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<Book>,
    @InjectConnection() private connection: Connection,
  ) {}


  create(date: CreateBookDto):Promise<BookDocument> {
    const book = new this.BookModel(date);
    return book.save();
  }

  getAll():Promise<BookDocument[]> {
    console.log('get All')
    return this.BookModel.find().exec();
  }

  update(id: string, data: UpdateBook): Promise<BookDocument>{
    return this.BookModel.findOneAndUpdate({_id: id}, data).exec();
  }

  deleteBook(id: string): Promise<BookDocument> {
    return this.BookModel.findByIdAndRemove({_id: id}).exec();
  }
}
