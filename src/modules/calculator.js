class Calculator {
  add(first, second) {
    return first + second;
  }

  subtract(first, second) {
    return first - second;
  }

  divide(first, second) {
    return first / second;
  }

  multiply(first, second) {
    return first * second;
  }
}

const calculator = new Calculator();

module.exports = calculator;
