const array = ['Goodbye']

function removeEveryOther(arr) {
    let newArray = []
    if (arr.length >= 2) {
        for (let i = 0; i < arr.length; i += 2) {
            newArray.push(arr[i])
        } return newArray
    } else {
        return arr;
    }
    //your code here
}

console.log(removeEveryOther(array))