import { useCallback, useState } from "react";
import { IBook } from "../../models/Book";
import { IBooksContext } from "./Context";

export const useBooks = (): IBooksContext => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [clone, setClone] = useState<IBook[]>([]);
  const setCurrentBooks = useCallback((
    data: IBook[], 
    filterAction?: boolean
  ): void => {
    setBooks(data);
    if(!filterAction) {
      setClone(data);
    }
  }, [])

  const [searchBook, setSearchBook] = useState<string>('');
  const setCurrentSearchBook = useCallback((data: string): void => {
    setSearchBook(data);
  }, [])

  return {
    books,
    setCurrentBooks,
    searchBook,
    setCurrentSearchBook,
    clone,
  }
}
