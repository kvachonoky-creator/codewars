function betterThanAverage(classPoints, yourPoints) {
    let summClassPoints = 0;
    let avgPoints = 0;
    for (let i = 0; i < classPoints.length; i++) {
        const e = classPoints[i];
        summClassPoints += e;
    }
    avgPoints = (summClassPoints - yourPoints) / (classPoints.length - 1)
    return avgPoints < yourPoints? true : false
}

let betterMark = betterThanAverage(points, 80);
console.log(betterMark);