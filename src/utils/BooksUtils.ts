import { IBook } from "../models/Book";

const getAuthors = (books: IBook[]) => {
  const authors: string[] = [];
  books
    .filter((book) => book.volumeInfo.authors)
    .forEach((book) => {
        authors.push(...book.volumeInfo.authors)
    });

  return authors
    .filter((value, index, self) => self.indexOf(value) === index);
}

const filterByAuthors = (books: IBook[], filter: string) => books
  .filter((book) => book.volumeInfo.authors?.includes(filter));

export {
  getAuthors,
  filterByAuthors
}