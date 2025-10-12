const str = "1 2 3 4 5"

function highAndLow(numbers) {
    let high = -Infinity;
    let low = Infinity;
    numbers = numbers.split(" ")
    const newArr = []
    const totalArrNumber = [];
    const totalArrString = [];
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = +numbers[i]
        newArr.push(numbers[i])
    }
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > high) {
            high = newArr[i]
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] < low) {
            low = newArr[i]
        }
    }
    totalArrNumber.push(high, low)
    for (let i = 0; i < totalArrNumber.length; i++) {
        totalArrNumber[i] += ''
        totalArrString.push(totalArrNumber[i])
    }
    let newStr = totalArrString.join(" ")
    return newStr
}

console.log(highAndLow(str));