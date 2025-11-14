function spinWords(string) {
  string = string.split(" ")
  const newArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i].length >= 5) {
      string[i] = string[i].split("").reverse().join("")
      newArr.push(string[i])
    } else {
      newArr.push(string[i])
    }
  } return newArr.join(" ")
}
