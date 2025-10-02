const marks_stud = [1, 2, 3, 4,5,6]

function getAverage(marks) {
    let avgMarks = 0;
    for (i = 0; i < marks.length; i++) {
        let e = marks[i];
        avgMarks += e
    } return Math.floor(avgMarks / marks.length)
    //TODO : calculate the downward rounded average of the marks array
}

const avgMark = getAverage(marks_stud);
console.log(avgMark);