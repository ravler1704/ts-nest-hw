import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/Book';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [
    {
      id: 1,
      title: 'Book 1',
      description: 'Description 1',
      authors: ['Author 1'],
      favorite: false,
      fileCover: 'fileCover1',
      fileName: 'fileName1',
      originalNameFileCover: 'originalNameFileCover1',
      originalNameFileName: 'originalNameFileName1',
    },
    {
      id: 2,
      title: 'Book 2',
      description: 'Description 2',
      authors: ['Author 2'],
      favorite: false,
      fileCover: 'fileCover2',
      fileName: 'fileName2',
      originalNameFileCover: 'originalNameFileCover2',
      originalNameFileName: 'originalNameFileName2',
    },
    {
      id: 3,
      title: 'Book 3',
      description: 'Description 3',
      authors: ['Author 3'],
      favorite: false,
      fileCover: 'fileCover3',
      fileName: 'fileName3',
      originalNameFileCover: 'originalNameFileCover3',
      originalNameFileName: 'originalNameFileName3',
    },
  ];

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number) {
    const book = this.books.find((book) => book.id === id);
    if (book) {
      return book;
    } else {
      throw new NotFoundException('Book not found');
    }
  }
}
