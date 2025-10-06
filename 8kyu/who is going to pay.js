const myName = "Me"

function whoIsPaying(name) {
    const oldAndNewName = []
    let newName;
    if (name.length > 2) {
        newName = name.slice(0, 2)
        oldAndNewName.splice(0, 0, name, newName)
        return oldAndNewName
    } else {
        oldAndNewName.push(name)
        return oldAndNewName
    }
    //your code here
}

console.log(whoIsPaying(myName));