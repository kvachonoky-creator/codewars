Object.defineProperty(
    String.prototype,
    'toJadenCase',
    { value :
            function toJadenCase() {
                return this.split(" ").map(str => str[0].toUpperCase()+ str.slice(1)).join(" ")
            }
    }
);