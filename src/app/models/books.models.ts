export class Book {
  constructor(
    public book_name: string,
    public book_autor: string,
    public genre: string,
    public id: number
  ) {}
}

export interface Books {
  books: Book[];
}
