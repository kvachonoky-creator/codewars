function positiveSum(arr) {
    let sum_pos = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] > 0 ? sum_pos += arr[i] : sum_pos;
    } return sum_pos
}