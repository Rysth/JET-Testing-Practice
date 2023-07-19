function capitalize(string) {
  const firstLetter = string.charAt(0).toUpperCase();
  const restString = string.substring(1);

  const newString = firstLetter + restString;
  return newString;
}

module.exports = capitalize;
