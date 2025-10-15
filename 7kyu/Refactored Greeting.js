class Person {
  constructor(myName, yourName) {
    this.name = myName;
  }
  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`
  }
}

const test = new Person("Yarik", "Sasha")
console.log(test.name);

console.log(test.greet("Sasha"));
