import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/Book';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): Book[] {
    return this.booksService.getBooks();
  }

  @Get(':id')
  getBook(
    @Param(
      'id',
      new ParseIntPipe({
        exceptionFactory: () => new BadRequestException('BadRequest'),
      }),
    )
      id: number,
  ): Book {
    return this.booksService.getBook(id);
  }
}
