function shortenToDate(longDate) {
    let indexDate = longDate.indexOf(",")
    if (longDate.includes(",")) {
       longDate =  longDate.slice(0, indexDate)
    } return longDate;
}

console.log(shortenToDate("Friday May 2, 7pm"));