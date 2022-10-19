const findTheOldest = function (arr) {
  let oldestAge =
    (Object.hasOwn(arr[0], 'yearOfDeath') ? arr[0].yearOfDeath : new Date().getFullYear()) -
    arr[0].yearOfBirth
  let oldest = arr[0]

  arr.forEach(e => {
    if (!Object.hasOwn(arr[0], 'yearOfDeath')) e.yearOfDeath = new Date().getFullYear()

    let age = e.yearOfDeath - e.yearOfBirth
    if (age > oldestAge) {
      oldestAge = age
      oldest = e
    }
  })
  return oldest
}

// Do not edit below this line
module.exports = findTheOldest

/* console.log(
  findTheOldest([
    {
      name: 'Carly',
      yearOfBirth: 2018,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ])
) */
