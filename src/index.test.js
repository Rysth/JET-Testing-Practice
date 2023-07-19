//Arrange
const { stringLength, reverseString } = require('./index');

// Task 1

//Act
test('Returns the characters count of a string', () => {
  //Assert
  expect(stringLength('hello')).toBe(5);
});

//Act
test('Throws an error for an empty string', () => {
  //Assert
  expect(() => stringLength('')).toThrow(Error);
});

// Task 2

//Act
test('Reverse the given string', () => {
  //Assert
  expect(reverseString('hello')).toBe('olleh');
});

// Task 3
