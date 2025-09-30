function sumMix(x){
let sum = 0;
for (let i = 0; i < x.length; i++){
    sum += Number(x[i]);
} return +sum;
}

console.log(sumMix([1,2,3]));