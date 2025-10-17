const n = 52412513

function descendingOrder(n) {
  return n = +((n + "").split("").sort().reverse().join(""))
}
console.log(descendingOrder(n));