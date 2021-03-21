import { createContext } from "react";
import { IBook } from "../../models/Book";

export interface IBooksContext {
  books: IBook[];
  setCurrentBooks: (data: IBook[], filterAction?: boolean) => void;
  searchBook: string;
  setCurrentSearchBook: (value: string) => void;
  clone: IBook[];
}

const BooksDefaultValue: IBooksContext= {
  books: [],
  setCurrentBooks: () => { },
  searchBook: '',
  setCurrentSearchBook: () => { },
  clone: []
}

export const booksContext = createContext<IBooksContext>(BooksDefaultValue)