// Create a function that takes a number as an argument and returns a grade based on that number.

    function grader(score) {
         if (score >= 0.9 && score <= 1) {
            return "A"
        } else if (score >= 0.8  && score < 0.9) {
            return "B"
        } else if (score >= 0.7 && score < 0.8) {
            return "C"
        } else if (score >= 0.6 && score < 0.7) {
            return "D"
        } else {
             return "F"
         }
}

console.log(grader(0.5))