const myStr = `This website is for losers LOL!`

function disemvowel(str) {
    newStr = ``
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
            str[i] = str[i].replace(str[i], "")
        } else {
            newStr += str[i]
        }
    }
    return newStr
}


console.log(disemvowel(myStr));