// Task 3

/* 
In this task, you will need to write several tests for each tested function. You could write all of your tests directly at the top level, but it's better to group related tests so their output is more readable. Jest has the describe() method just for that. Read about it here and apply it in your tests for this task:

Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.
Write at least 3 tests for each of the calculator methods.
Group tests for each method using describe() method.  
 */

const Calculator = require('./calculator');

describe('My Calculator Class', () => {
  describe('Calcutor Add Method', () => {
    test('Sum two numbers', () => {
      expect(Calculator.add(1, 2)).toBe(3);
    });
    test('Sum two numbers', () => {
      expect(Calculator.add(2, 2)).toBe(4);
    });
    test('Sum two numbers', () => {
      expect(Calculator.add(3, 3)).toBe(6);
    });
  });

  describe('Calcutor Subtract Method', () => {
    test('Subtract two numbers', () => {
      expect(Calculator.subtract(1, 2)).toBe(-1);
    });
    test('Subtract two numbers', () => {
      expect(Calculator.subtract(2, 2)).toBe(0);
    });
    test('Subtract two numbers', () => {
      expect(Calculator.subtract(5, 3)).toBe(2);
    });
  });

  describe('Calcutor Divide Method', () => {
    test('Divide two numbers', () => {
      expect(Calculator.divide(1, 1)).toBe(1);
    });
    test('Divide two numbers', () => {
      expect(Calculator.divide(10, 2)).toBe(5);
    });
    test('Divide two numbers', () => {
      expect(Calculator.divide(30, 3)).toBe(10);
    });
  });

  describe('Calcutor Multiply Method', () => {
    test('Multiply two numbers', () => {
      expect(Calculator.multiply(1, 1)).toBe(1);
    });
    test('Multiply two numbers', () => {
      expect(Calculator.multiply(10, 2)).toBe(20);
    });
    test('Multiply two numbers', () => {
      expect(Calculator.multiply(30, 3)).toBe(90);
    });
  });
});
