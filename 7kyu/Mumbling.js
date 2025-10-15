const test = "ZpglnRxqenU"

function accum(s) {
    s = s.split('');
    const newArr = [];
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].toUpperCase() + s[i].repeat(i).toLowerCase()
        newArr.push(s[i]);
    }
    return newArr.join('-');
}

console.log(accum(test))