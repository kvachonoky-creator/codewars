const myArray = [1, 2, 3, 4]

function firstNonConsecutive(arr) {
    let number
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1] + 1) {
            continue
        } else {
            number = arr[i]
            return number
        }
    } return null

}


const nonConsecutivenumber = firstNonConsecutive(myArray)
console.log(nonConsecutivenumber);