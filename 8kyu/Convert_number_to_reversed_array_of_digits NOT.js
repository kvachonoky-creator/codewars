function digitize(n) {
    let array = []
    if (n.length > 0) {
        for (let i = 0; i < n.length; i++) {
            n[i] = array.unshift();
        }return array
    }
    //code here
}

console.log(digitize((12345)));