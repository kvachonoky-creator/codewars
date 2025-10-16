class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height
  }
  get surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.height * this.width)
  }
  get volume() {
    return this.height * this.width * this.length
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length);
    this.width = length;
    this.height = length
}
}

const cubik = new Cube (1)
console.log(cubik);