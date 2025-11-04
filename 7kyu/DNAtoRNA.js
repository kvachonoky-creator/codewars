const test = 'GCAT'

function DNAtoRNA(dna) {
    return dna.split("").map(l => l === "T"? l = "U" : l).join("")
}

console.log(DNAtoRNA(test))