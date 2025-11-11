function divisors(integer) {
    const arr = []
    let n = 2;
    while (n < integer) {
        if (integer % n === 0) {
            arr.push(n);
        }
        n++
    }
    if (arr.length === 0) {
        return `${integer} is prime`;
    }
    return arr
}

console.log(divisors(13));