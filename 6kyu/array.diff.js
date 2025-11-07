function arrayDiff(a, b) {
  newArr = []
  a.forEach(elem => {
    if (!b.includes(elem)) {
      newArr.push(elem)
    }
  })
  return newArr;
}