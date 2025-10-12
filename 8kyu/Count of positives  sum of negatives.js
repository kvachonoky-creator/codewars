let testData = [1, 2, 3, null]

function countPositivesSumNegatives(input) {
    const newArr = [];
    let countPos = 0;
    let sumNeg = 0;
    if (input === null) {
        return newArr
    }
    else if (input.length > 0) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                countPos++
            } else if (input[i] < 0) {
                sumNeg += input[i]
            }
        } newArr.push(countPos, sumNeg)
        return newArr
    } return newArr
}

console.log(countPositivesSumNegatives(testData));