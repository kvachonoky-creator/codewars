const str = "1 2 3 4 5"

function highAndLow(numbers) {
    let highest
    let lowest;
    let newStr
    const myArr = []
    numbers = numbers.split(' ');
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            numbers[i] = highest
        }
    }
    // for (let i = 0; i < highest; i++) {
    //     if (numbers[i] < lowest) {
    //         numbers[i] = lowest
    //         myArr.push(lowest);
    //     }
    // }
    // newStr = myArr.join(' ');
myArr.push(highest, lowest);
    return myArr;
}

console.log(highAndLow(str));