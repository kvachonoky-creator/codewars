function basicOp(operation, value1, value2) {
    let total_value = 0;
    switch (operation) {
        case operation = "+":
            total_value = value1 + value2
            break;
        case operation = "-":
            total_value = value1 - value2
            break;
        case operation = "*":
            total_value = value1 * value2
            break;
        case operation = "/":
            total_value = value1 / value2
            break;
    }
    return total_value
    //Code
}