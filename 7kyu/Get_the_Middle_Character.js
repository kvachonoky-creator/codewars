let test = "test"

function getMiddle(s) {
    return s.length % 2 !== 0 ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2]
}

console.log(getMiddle(test));


// You're_a_square!

var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n)) ? true : false
}