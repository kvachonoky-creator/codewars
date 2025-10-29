const getSum = (a, b) => {
  const newArr = [];
  if (a === b) {
    return a
  }
  else if (a < b) {
    while (a <= b) {
      newArr.push(a);
      a++
    }
  } else if (a > b) {
    while (a >= b) {
      newArr.push(a)
      a--
    }
  }
  return newArr.reduce((a, b) => a + b, 0)
}