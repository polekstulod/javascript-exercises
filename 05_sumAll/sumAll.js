const sumAll = function (min, max) {
  if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') return 'ERROR'

  if (min > max) max = [min, (min = max)][0]

  let sum = 0
  Array.from({ length: max }, (_, i) => i + min).forEach(x => (sum += x))

  return sum
}

// Do not edit below this line
module.exports = sumAll
