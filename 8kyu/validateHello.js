function validateHello(greetings) {
    greetings = greetings.toLowerCase()
    if (greetings.includes("hello")) {
        greetings = true
    } else if (greetings.includes("ciao")) {
        greetings = true
    }
 else if (greetings.includes("ciao")) {
    greetings = true
}
else if (greetings.includes("salut")) {
    greetings = true
}
else if (greetings.includes("hallo")) {
    greetings = true
}
else if (greetings.includes("hola")) {
    greetings = true
}
else if (greetings.includes("ahoj")) {
    greetings = true
}
else if (greetings.includes("czesc")) {
    greetings = true
} else {
    greetings = false;
} return greetings
}

const greet = validateHello(message);
console.log(greet);