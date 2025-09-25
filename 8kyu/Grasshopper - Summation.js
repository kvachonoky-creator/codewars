let summation = function (num) {
    // Code here
    let i = 0
    let sum = 0;
    while (i <= num) {
        sum += i;
        i++
    }
    return sum
}

console.log(summation(8));