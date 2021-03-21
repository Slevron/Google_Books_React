import data from "../mock/data.json";
import { filterByAuthors, getAuthors } from "./BooksUtils"

test('return array of authors', () => {
  const authors = getAuthors(data);
  expect(authors.length).toBe(3);
  expect(authors[0]).toBe(data[0].volumeInfo.authors[0])
  expect(authors[1]).toBe(data[2].volumeInfo.authors[0])
  expect(authors[2]).toBe(data[2].volumeInfo.authors[1])
})

test('return new books array by author', () => {
  const authors = getAuthors(data);
  const books = filterByAuthors(data, authors[0]);
  expect(books.length).toBe(2)
  expect(books[0].volumeInfo.authors[0]).toBe(authors[0])
  expect(books[1].volumeInfo.authors[0]).toBe(authors[0])

  const books1 = filterByAuthors(data, authors[1]);
  expect(books1.length).toBe(1)
  expect(books1[0].volumeInfo.authors[0]).toBe(authors[1])
  expect(books1[0].volumeInfo.authors[1]).toBe(authors[2])
})

test('return empty books array if no value', () => {
  const books = filterByAuthors(data, '');
  expect(books.length).toBe(0);
})