function century(year) {
  year = year + ""
  let centry = ``
  return year.slice(-2) === "00" ? centry = +year.slice(0, year.length - 2) : centry = +year.slice(0, year.length - 2) + 1
}

console.log(century(200));