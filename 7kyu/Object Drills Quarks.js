class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1 / 3
  }
  interact(quarke) {
    let res1 = this.color;
    let res2 = quarke.color;
    this.color = res2;
    quarke.color = res1

  }
  // Your code here.
}

let q1 = new Quark("red", "up");
let q2 = new Quark("blue", "strange");

console.log(q1.interact(q2));

console.log(q1);
console.log(q2);