function duplicateEncode(word) {
    const wordArr = word.toLowerCase().split('')
    const newArr = []
    for (let i = 0; i < wordArr.length; i++) {
        const arr = wordArr.filter(l => l.includes(wordArr[i]))
        arr.length > 1 ? newArr.push(")") : newArr.push("(")
    }
    return newArr.join("")
}

console.log(duplicateEncode("Success"))