function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else {
    throw Error('String must be between 1 and 10 characters long.');
  }
}

function reverseString(string) {
  const array = string.split('');
  return array.reverse().join('');
}

module.exports = {
  stringLength,
  reverseString,
};
