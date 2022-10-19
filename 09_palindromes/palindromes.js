const palindromes = function (x) {
  const arr = x
    .toLowerCase()
    .split('')
    .filter(letter => isLetter(letter))
    .reverse()

  return arr.toString() === arr.reverse().toString()
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase()
}

// Do not edit below this line
module.exports = palindromes
