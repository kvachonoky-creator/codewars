// Write a function that always returns 5
//
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
//
// Good luck :)


function unusualFive() {
    let five = "abcde";
    let one = indexOf("a");
    let two = indexOf("b");
    let three = indexOf("c");
    let four = indexOf("d");
    let five = indexOf("e");
    return (one + two + three + four + five)
}

console.log(unusualFive());