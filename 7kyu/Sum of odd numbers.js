const rowSumOddNumbers = n => {
    let first_num = Math.pow(n, 2) - n - 1;
    const newArr = []
    for (let i = 0; i < n; i++) {
        first_num += 2
        newArr.push(first_num)
    }
    return newArr.reduce((a,b) => a + b)
}