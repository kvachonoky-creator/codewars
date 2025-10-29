function moveZeros(arr) {
  const newArr = arr.filter(a => a !== 0)
  const zeroArr = arr.filter(a => a === 0)
  return newArr.concat(zeroArr)
}
