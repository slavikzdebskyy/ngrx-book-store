import { Book } from '../models/books.models';

export interface BookState {
  bookStore: {
    books: Book[],
    selectedBook: Book
  };
}
