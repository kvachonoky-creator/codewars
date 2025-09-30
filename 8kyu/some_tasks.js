function noSpace(x){
x = x.replaceAll(" ", "");
return x;
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

function ensureQuestion(s) {
  return s[s.length-1] === "?" ? s : `${s}?`
}



function findAverage(array) {
  if (array.length > 1) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i] / array.length
    } return sum
  } else if (array.length === 1) {
return sum = array[0]
  }
  else {
    return 0;
  }
  // your code here

}


console.log(findAverage([1, 1, 1]));


function getSize(width, height, depth) {
  let volume = width * height * depth;
  let square = 2 * (width * height + width * depth + height * depth)
  let array = []
  array.push(square, volume)
  return array
}

console.log(getSize(4, 2, 6));

const num = [1, 5.2, 4, 0, -1]

function sum (numbers) {
 if (numbers.length > 0) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}return sum;
 }
  return 0
}

console.log(sum(num));