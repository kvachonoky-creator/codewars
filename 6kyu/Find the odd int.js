function findOdd(A) {
  const a = A.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i - 1] || a[i] === a[0]) {
      count++
    }
    else if (a[i] !== a[i - 1]) {
      if (count % 2 === 1) {
        return a[i - 1]
      } else {
        count = 1
      }
    }
  } return a.at(-1)
}
