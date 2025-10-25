const sortItOut = n => {
    const even = []
    const odd = []
    for (let i = 0; i < n.length; i++) {
        Math.floor(n[i]) % 2 === 0 ? even.push(n[i]) : odd.push(n[i])
    }
    even.sort((a, b) => b - a)
    odd.sort((a, b) => a-b)
    return odd.concat(even)
}