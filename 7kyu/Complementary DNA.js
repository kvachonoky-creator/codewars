const test = "ATTGC"
const dnaStrand = x => {
  x = x.split("");
  const newArr = []
  for (let i = 0; i < x.length; i++) {
    switch (x[i]) {
      case "A":
        x[i] = "T"
        newArr.push(x[i])
        break;
      case "T":
        x[i] = "A"
        newArr.push(x[i])
        break;
      case "C":
        x[i] = "G"
        newArr.push(x[i])
        break;
      case "G":
        x[i] = "C"
        newArr.push(x[i])
        break;
    }
  } return newArr.join("")
}