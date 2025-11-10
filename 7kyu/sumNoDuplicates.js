function sumNoDuplicates(numList) {
    return numList.reduce(function (acc, item, index, arr) {
        if (arr.indexOf(item) === arr.lastIndexOf(item)) {
            acc += item
        }
        return acc
    }, 0)
}

console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]))