const number = 9119

function squareDigits(num) {
    num += "";
    newNum = ``
    for (let i = 0; i < num.length; i++) {
        newNum += num[i] ** 2
    }
    return +newNum;
}


console.log(squareDigits(number));