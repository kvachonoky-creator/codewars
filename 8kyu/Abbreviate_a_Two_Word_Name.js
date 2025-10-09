const nameee = "Yar Kvach"

function abbrevName(name) {
    let firstNameLetter = name[0].toUpperCase();
    let lastNameLetter = name[name.indexOf(" ") + 1].toUpperCase()
    return `${firstNameLetter}.${lastNameLetter}`
}

console.log(abbrevName(nameee));