let test = "bitcoin take over the world maybe who knows perhaps"

function findShort(s) {
    s = s.split(" ")
    let newS = s[0]
    for (let i = 0; i < s.length; i++) {
        if (s[i].length < newS.length) {
            newS = s[i]
        }
    }
    return newS.length
}


console.log(findShort(test));