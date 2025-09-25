// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
//

function combat(health, damage) {
    if (health > 0) {
        health -= damage;
        if (health <= 0) {
            return 0
        } else {
            return health;
        }
    } else {
        return 0
    }
}

console.log(combat(0, 3))