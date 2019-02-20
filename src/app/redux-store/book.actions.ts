import {Action} from '@ngrx/store';
import { Book } from '../models/books.models';

  export const UPDATE_BOOK = 'UPDATE_BOOK';
  export const SELECT_BOOK = 'SELECT_BOOK';
  export const LOAD_BOOKS = 'LOAD_BOOKS';
  export const ADD_BOOK = 'ADD_BOOK';
  export const REMOVE_BOOK = 'REMOVE_BOOK';

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

export class AddBook implements Action {
  readonly type = ADD_BOOK;
  constructor(public payload: Book) {}
}

export class RemoveBook implements Action {
  readonly type = REMOVE_BOOK;
  constructor(public payload: Book) {}
}

export type BooksAction =  UpdateBook | LoadBooks | SelectBook | AddBook | RemoveBook;
