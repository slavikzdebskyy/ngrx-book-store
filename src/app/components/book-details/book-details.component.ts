import { Component, OnInit } from '@angular/core';
import { BookState } from 'src/app/redux-store/state';
import { Store } from '@ngrx/store';
import { Books, Book } from 'src/app/models/books.models';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UpdateBook } from 'src/app/redux-store/book.actions';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  state: Observable<Books>;
  selectedBook: Book;
  isEditBook = false;
  bookForm: FormGroup;

  constructor(private store: Store<BookState>,
              private route: ActivatedRoute,
              private bookService: BookService) {

                this.bookService.loadBooks();
               }

  ngOnInit() {
    this.state = this.store.select('bookStore');
    const id = parseInt(this.route.snapshot.params['id'], 10);
    this.bookService.selectBook(id);
    this.state.subscribe(res => {
      if (res.selectedBook) {
        this.selectedBook = res.selectedBook; console.log('dsfsdf', this.selectedBook.book_name);
        this.bookForm = new FormGroup({
          book_name: new FormControl(this.selectedBook.book_name, Validators.required),
          book_autor: new FormControl(this.selectedBook.book_autor, Validators.required),
          genre: new FormControl(this.selectedBook.genre, Validators.required),
          id: new FormControl(this.selectedBook.id)
        });
      }
    });
  }

  editBook() {
    this.isEditBook = true;
  }

  updateBook() {
    this.selectedBook = new Book(this.bookForm.value.book_name, this.bookForm.value.book_autor, this.bookForm.value.genre, this.bookForm.value.id);
    this.bookService.updateBook(this.selectedBook).subscribe(book => {
      this.store.dispatch(new UpdateBook(book));
    });
    this.isEditBook = false;
  }

  setFavoriteBook() {
    this.selectedBook.isSelected = true;
    this.bookService.updateBook(this.selectedBook).subscribe(book => {
      this.store.dispatch(new UpdateBook(book));
    });
  }

}