"use strict";
class Player {
    AccessHeight() {
        return this.height;
    }
    constructor(height, weight) {
        this.userId = String(Math.random() * 1000);
        this.getId = () => this.userId;
        this.height = height;
        this.weight = weight;
    }
}
class NewPlayer extends Player {
    constructor(height, weight, name) {
        super(height, weight);
        this.name = name;
    }
}
const suraj = new Player(12.43, 6.5);
// console.log(suraj.weight)
// console.log(suraj.AccessHeight())
const abhinav = new NewPlayer(12, 23, "surajkr");
console.log(abhinav.getId);
