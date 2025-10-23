const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const createPhoneNumber = num => {
  num.map(n => n.toString())
  num.unshift("(");
  num.splice(4, 0, ") ");
  num.splice(8, 0, "-")
  return num.join("")
}

console.log(createPhoneNumber(test));