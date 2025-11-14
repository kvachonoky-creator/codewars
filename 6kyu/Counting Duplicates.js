function duplicateCount(text) {
    let num = 0
    const newArr = []
    text = text.toLowerCase()
    text.split("").forEach(letter => {
        let num2 = 0
        if (!newArr.includes(letter)) {
            for (let i = 0; i < text.length; i++) {
                letter === text[i] ? num2++ : num2;
            }
            if (num2 > 1) {
                num++
                newArr.push(letter)
            }
        }
    })
    return num
}

console.log(duplicateCount("aA11"))