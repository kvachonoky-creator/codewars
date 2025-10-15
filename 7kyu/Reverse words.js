const test = "This is an example!"

function reverseWords(str) {
    str = str.split(" ")
    const newArr = []
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split("").reverse().join("");
        newArr.push(str[i]);
    } return newArr.join(" ");
}

console.log(reverseWords(test));