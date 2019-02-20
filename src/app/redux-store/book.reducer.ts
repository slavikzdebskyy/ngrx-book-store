import { BooksAction, ADD_BOOK, DELETE_BOOK, UPDATE_BOOK, LOAD_BOOKS, SELECT_BOOK} from './book.actions';

const initialState = {
  books: []
};

export const bookReducer = (state = initialState, action: BooksAction) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: [...state.books.filter(c => c.id !== action.payload.id)]
      };
    case UPDATE_BOOK:
      const index = state.books.findIndex(c => c.id === action.payload.id);
      state.books[index] = action.payload;
      return {
        ...state,
        books: [...state.books]
      };
    case SELECT_BOOK:
      const idx = state.books.findIndex(c => c.id === action.payload.id);
      state.books[idx].isSelected = true;
      return {
        ...state,
        books: [...state.books]
      };
    case LOAD_BOOKS:
      return {
        ...state,
        books: [...action.payload]
      };
    default:
      return state;
  }
}
