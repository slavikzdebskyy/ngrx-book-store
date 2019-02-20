import {Action} from '@ngrx/store';
import { Book } from '../models/books.models';

  export const ADD_BOOK = 'ADD_BOOK';
  export const DELETE_BOOK = 'DELETE_BOOK';
  export const UPDATE_BOOK = 'UPDATE_BOOK';
  export const SELECT_BOOK = 'SELECT_BOOK';
  export const LOAD_BOOKS = 'LOAD_BOOKS';

export class AddBook implements Action {
  readonly type = ADD_BOOK;
  constructor(public payload: Book) {}
}

export class DeleteBook implements Action {
  readonly type = DELETE_BOOK;
  constructor(public payload: Book) {}
}

export class UpdateBook implements Action {
  readonly type = UPDATE_BOOK;
  constructor(public payload: Book) {}
}

export class SelectBook implements Action {
  readonly type = SELECT_BOOK;
  constructor(public payload: number) {}
}

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;
  constructor(public payload: Book[]) {}
}

export type BooksAction = AddBook | DeleteBook | UpdateBook | LoadBooks | SelectBook;
