Convert_number_to_reversed_array_of_digits

let str = 35231

function digitize(n) {
    String(str)
    const newArr = [];
    for (let i = 0; i < n.length; i++) {
        newArr.unshift(n[i])
    } return newArr
    //code here
}

console.log(digitize(str));

// console.log(str[1]);