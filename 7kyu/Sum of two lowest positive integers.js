const test = [3, 87, 45, 12, 7]

const sumTwoSmallestNumbers = arr => {
  sum = 0
  const newArr = arr.sort((a, b) => a - b).slice(0, 2)
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i]
  } return sum
}

console.log(sumTwoSmallestNumbers(test));