function removeChar(str){
    if (str.length > 2){
        str = str.slice(1)
        str = str.slice(0, -1);
        return str;
    }else {
        return ""
    }
    //You got this!
}

console.log(removeChar("su"));