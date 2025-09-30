function countSheeps(sheep) {
    let sum = 0
for (let i = 0; i < sheep.length; i++) {
    sheep[i] === true ? sum += 1 : sum
    }return sum;
    // TODO
}

console.log(countSheeps([undefined,null,false,true]));