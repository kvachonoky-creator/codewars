let str = "A1,B1"

function array(string) {
    let newStr = ""
    newStr = string.split(",");
    if (newStr.length >= 3) {
        newStr = newStr.slice(1, -1);
        newStr = newStr.join(",")
        newStr = newStr.replaceAll(",", " ")
    } else {
        newStr = null
    }
    return newStr
}

console.log(array(str));