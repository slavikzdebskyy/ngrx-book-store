import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Books, Book } from 'src/app/models/books.models';
import { BookState } from 'src/app/redux-store/state';
import { BookService } from 'src/app/services/book.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  state: Observable<Books>;
  serchValue: string;
  books: Book[];
  filteredBooks: Book[];

  constructor(private store: Store<BookState>,
              private bookService: BookService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    this.bookService.loadBooks();
    iconRegistry.addSvgIcon(
     'book-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/books.svg'));
    iconRegistry.addSvgIcon(
      'favorite',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/star.svg'));
  }

  ngOnInit() {
    this.state = this.store.select('bookStore');
    this.state.subscribe(books => {
      this.books = books.books;
      this.filteredBooks = books.books;
    });
  }

 search() {
   this.filteredBooks = this.books.filter(book => book.book_name.includes(this.serchValue));
 }
}
