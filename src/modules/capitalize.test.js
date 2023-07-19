const capitalize = require('./capitalize');

describe('Capitalize', () => {
  test('Capitalize a String', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
