const b = "moOse"

const isIsogram = str => {
  let test = ""
  str = str.toLowerCase().split("").sort()
  for (let i = 0; i < str.length; i++) {
    if (str[i] === test) {
      return false
    } test = str[i]
  } return true
}

console.log(isIsogram(b));
