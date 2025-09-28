function array(string) {
    if (string.length > 3) {
        string = string.slice(1, -1);
        string = string.replace(",", " ");
        return string;
    } else {
        return null
    }
}

console.log(array(1,2,3))