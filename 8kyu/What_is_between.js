const a = 1;
const b = 4;

function between(a, b) {
    const newArr = []
    newArr.unshift(a);
    while (a < b) {
        const c = a + 1;
        newArr.push(c)
        a++
    }
    return newArr
    // your code here
}


const array = between(a, b);
console.log(array);