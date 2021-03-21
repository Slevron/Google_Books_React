import { arrayToString, limitStringSize } from "./DisplayUtils"

test('return array transformed to a string', () => {
  const data = ['test', 'test2'];
  expect(arrayToString(data)).toBe(data.toString());
})

test('return empty string if undefined', () => {
  expect(arrayToString(undefined)).toBe('No Informations');
})

test('return trimmed string', () => {
  const value = 'string';
  expect(limitStringSize(value, 3)).toBe('str...');
})
