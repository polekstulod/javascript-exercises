const reverseString = function (str) {
  if (str === '') return str
  return str.split('').reverse().join('')
}

// Do not edit below this line
module.exports = reverseString
