const oddOrEven = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum % 2 === 0 ? "even" : "odd"
}