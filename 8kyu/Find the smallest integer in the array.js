function findSmallestInt(arr) {
    //    return Math.min(...arr)
    // let smallestNumber = Infinity
    let smallestNumber = arr[0]
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i]
        if (e < smallestNumber) {
            smallestNumber = e
        }
    } return smallestNumber
    //your code here
}