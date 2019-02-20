import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Books } from 'src/app/models/books.models';
import { BookState } from 'src/app/redux-store/state';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  state: Observable<Books>;

  constructor(private store: Store<BookState>, private bookService: BookService) { }

  ngOnInit() {
    this.state = this.store.select('bookStore');
    this.bookService.loadBooks();
  }

}
