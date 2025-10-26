checkDog = function () {
    if (this.vaccinated === true && this.wormed === true) {
        return `${this.name} can be accepted`
    } else if (this.vaccinated === true || this.wormed === true) {
        return `${this.name} can only be accepted by itself`
    } else {
        return `${this.name} can not be accepted`
    }
}