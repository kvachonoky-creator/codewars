const stroka = "The greatest victory is that which requires no battle"

function reverseWords(str){
    str = str.split(" ")
    str.reverse()
    str = str.join(" ")
    return str; // reverse those words
}

console.log(reverseWords(stroka));