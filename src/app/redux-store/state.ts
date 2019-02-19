import { Book } from '../models/books.models';

export interface AppState {
  bookStore: {
    books: Book[]
  };
}
