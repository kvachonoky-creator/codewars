const findUniq = arr => {
    arr.sort((a, b) => a - b)
    return arr[0] < arr[1] ? arr[0] : arr.at(-1)
};