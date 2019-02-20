import { BooksAction, UPDATE_BOOK, LOAD_BOOKS, SELECT_BOOK, ADD_BOOK, REMOVE_BOOK} from './book.actions';

const initialState = {
  books: [],
  selectedBook: null
};

export const bookReducer = (state = initialState, action: BooksAction) => {
  switch (action.type) {

    case UPDATE_BOOK:
      const index = state.books.findIndex(book => book.id === action.payload.id);
      state.books[index] = action.payload;
      return {
        ...state,
        books: [...state.books]
      };
    case SELECT_BOOK:
      state.selectedBook = state.books.find(book => book.id === action.payload);
      return {
        ...state,
      };
    case LOAD_BOOKS:
      return {
        ...state,
        books: [...action.payload]
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case REMOVE_BOOK:
      const ind = state.books.findIndex(book => book.id === action.payload.id);
      state.books.splice(ind, 1);
      return {
        ...state,
        books: [...state.books]
      };
    default:
      return state;
  }
}
