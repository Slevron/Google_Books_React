import { isString } from "./ValidationParams"

test('check is string with valid string', () => {
  expect(isString('test')).toBeTruthy();
})

test('check is string with injection script', () => {
  expect(isString('<script>alert("wut")</script>')).toBeFalsy();
})

test('check is string with symbols', () => {
  expect(isString('@??!')).toBeFalsy();
})