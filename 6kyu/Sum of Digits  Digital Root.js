let num = 999999999999
const digitalRoot = n => {
    n = n + "";
    let sum = n.split("").reduce((a, b) => parseInt(a) + parseInt(b) + "");
    while (sum.length > 3) {
        sum = n.split("").reduce((a, b) => parseInt(a) + parseInt(b) + "");
    }
    if (sum.length === 2) {
        return +sum.split("").reduce((a, b) => parseInt(a) + parseInt(b) +"").split("").reduce ((a,b) => parseInt(a) + parseInt(b));
    }
    return +sum.split("").reduce((a, b) => parseInt(a) + parseInt(b))
}