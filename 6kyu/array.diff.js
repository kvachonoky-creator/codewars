const test1 = [1, 2, 3]
const test2 = [1, 2]
function arrayDiff(a, b) {
  const newArr = []
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (b[i] !== a[j] && !newArr.includes(b[i])) {
        newArr.push(a[j])
      }
    }
  } return newArr
}

console.log(arrayDiff(test1, test2));