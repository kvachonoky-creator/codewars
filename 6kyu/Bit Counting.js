const test = 1234
const countBits = n => n.toString(2).split("").filter(a => a === "1").reduce((a, b) => parseInt(a) + parseInt(b), 0)