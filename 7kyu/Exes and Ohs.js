const test = "zpzpzpp"

const XO = str => {
  let x = 0;
  let o = 0;
  str = str.toLowerCase().split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x += 1;
    } else if (str[i] === "o") {
      o += 1;
    }
  } return x === o ? true : false
}

console.log(XO(test));