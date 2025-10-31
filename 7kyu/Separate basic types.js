const test = ['a', 1, 2, false, 'b']

function separateTypes(input) {
  const obj = {}
  const num = input.filter(i => typeof i === "number");
  const str = input.filter(i => typeof i === "string");
  const bool = input.filter(i => typeof i === "boolean");
  if (num.length !== 0) {
    obj.number = num
  }
  if (str.length !== 0) {
    obj.string = str
  }
  if (bool.length !== 0) {
    obj.boolean = bool
  }
  return obj
}