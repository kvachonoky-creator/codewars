const newObj = {
  name: 'Dez',
  age: 24,
  sex: "m",
}

function addProperty(obj, prop, value) {
  for (const key in obj) {
    if (key === prop) {
      throw new Error("The property already exists");
    }
    // Add your code here
  }      obj[prop] = value;
}

console.log(addProperty(newObj, "sa"));
console.log(newObj);
