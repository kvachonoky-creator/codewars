class Ghost {
    constructor() {
        this.color = Math.floor(Math.random() * 3) === 0 ? "yellow" : Math.floor(Math.random() * 3) === 1 ? "white" : Math.floor(Math.random() * 3) === 2 ? "purple" : "red"
    }
}

const blue = new Ghost()

console.log(blue)