import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  newBookForm: FormGroup;

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.newBookForm = new FormGroup({
      book_name: new FormControl('', Validators.required),
      book_autor: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      id: new FormControl(this.random()),
      isSelected: new FormControl(false)
    });
  }

  addNewBook() {
    if (this.newBookForm.valid) {
      this.bookService.addNewBook(this.newBookForm.value).subscribe(res => {
        this.router.navigate(['']);
      });
    }
  }

  random(): number {
    return parseInt((Math.random() * 1000).toString(), 10);

  }

}
