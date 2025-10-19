let y = 20

const solution = x => {
    const arr = []
    let sum = 0
    while (x > 0) {
        x--
        arr.push(x);
    }
    const newArr =  arr.filter(x => x % 3 === 0 || x % 5 === 0)
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i]
    }
    return sum
}

console.log(solution(y))