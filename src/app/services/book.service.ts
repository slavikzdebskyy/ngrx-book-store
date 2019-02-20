import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {BookState} from '../redux-store/state';
import {LoadBooks} from '../redux-store/book.actions';
import {Observable} from 'rxjs';
import {Book} from '../models/books.models';
import {map} from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { SelectBook } from './../redux-store/book.actions';

@Injectable()
export class BookService {

  endPoint = environment.API_URL;

  constructor(private http: HttpClient, private store: Store<BookState>) {}

  preloadBooks(): Observable<Book[]> {
    const request = `${this.endPoint}/posts`;
    return this.http.get<Book[]>(request).pipe(
      map(response => response)
    );
  }

  loadBooks(): void {
    this.preloadBooks().subscribe(books => {
      this.store.dispatch(new LoadBooks(books));
    });
  }

  selectBook(id): void {
    this.preloadBooks().subscribe(books => {
      this.store.dispatch(new LoadBooks(books));
      this.store.dispatch(new SelectBook(id));
    });
  }

  updateBook(updatedBook: Book): Observable<Book> {
    const request = `${this.endPoint}/posts/${updatedBook.id}`;
    return this.http.put(request, updatedBook).pipe(
      map((response: Book) => response)
    );
  }

}
