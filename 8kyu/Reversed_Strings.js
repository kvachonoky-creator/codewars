const myStr = "world"

function solution(str) {
    newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        let e = str[i];
        newStr += e
    }
    return newStr
}


const reservedString = solution(myStr);
console.log(reservedString);