const arr_1 = [1, 2, 3, 4];
const arr_2 = [1, 2, 3, 4];


function arrayPlusArray(arr1, arr2) {
    let sum_1 = 0
    let sum_2 = 0

    for (let i = 0; i < arr1.length; i++) {
        let e = arr1[i]
        sum_1 += e
    }
    for (let i = 0; i < arr2.length; i++) {
        let e = arr2[i]
        sum_2 += e
    } return sum_1 + sum_2
}

const sumArray = arrayPlusArray(arr_1, arr_2);
console.log(sumArray);