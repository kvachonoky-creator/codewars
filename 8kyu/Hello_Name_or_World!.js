function hello(name = "World") {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
   if(name === "") {
       return `Hello, World!`
   }
    return `Hello, ${name}!`;
}

console.log(hello(""));