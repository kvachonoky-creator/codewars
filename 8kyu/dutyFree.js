 function dutyFree(normPrice, discount, hol) {
  let countBottle = 0;
  let totPrice = 0
  while (hol >= totPrice) {
    let priceOneBottleWithDisc = normPrice * (discount / 100)
    totPrice += priceOneBottleWithDisc;
    countBottle++
  } return Math.floor(countBottle) - 1
}

console.log(dutyFree(17, 10, 500));