const test1 = "eggegeg";
const test2 = "ijij"

const longest = (s1, s2) => {
  const newArr = []
  let test = ``
  const s3 = s1.concat(s2).split("").sort();
  for (let i = 0; i < s3.length; i++) {
    if (test !== s3[i]) {
      newArr.push(s3[i]);
      test = s3[i]
    }
  } return newArr.join("")
}

console.log(longest(test1, test2));