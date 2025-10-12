const test = "455"
function maskify(cc) {
    let newS = ``
    if (cc.length > 4) {
        for (let i = 0; i < cc.length - 4; i++) {
            let valueIndex = cc[i]
            valueIndex = "#"
            newS += valueIndex;
        } return newS + cc.slice(cc.length - 4)
    } return cc

}

console.log(maskify(test));