const arr = [1,2,'a','b']

function filter_list(l) {
    const newArr = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === "number") {
            newArr.push(l[i]);
        }
    } return newArr
}

console.log(filter_list(arr));