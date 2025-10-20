const input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

const openOrSenior = data => {
  const newArr = [];
  for (let i = 0; i < data.length; i++) {
    data[i][0] >= 55 && data[i][1] > 7 ? newArr.push("Senior") : newArr.push("Open")
  } return newArr
}

console.log(openOrSenior(input));