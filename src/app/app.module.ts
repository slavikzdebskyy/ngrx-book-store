import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {HttpClientModule} from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { bookReducer } from './redux-store/book.reducer';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({bookStore: bookReducer}),
    StoreRouterConnectingModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
