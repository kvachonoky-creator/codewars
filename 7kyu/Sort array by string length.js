const arr = ["Telescopes", "Glasses", "Eyes", "Monocles"]

// function sortByLength(array) {
//   return array.sort((a, b) => a.length - b.length)
// }

const sortByLength = array => {return array.sort((a, b) => a.length - b.length)}

console.log(sortByLength(arr));