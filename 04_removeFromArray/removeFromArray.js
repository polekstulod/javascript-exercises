const removeFromArray = function (arr, ...num) {
  return arr.filter(x => !num.includes(x))
}

// Do not edit below this line
module.exports = removeFromArray
