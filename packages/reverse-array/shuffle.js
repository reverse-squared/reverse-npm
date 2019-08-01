"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("@reverse/random");
const remove_1 = require("./remove");
function shuffle(array) {
    const newArray = [];
    let shuffleArray = array.concat();
    while (shuffleArray.length > 0) {
        const item = random_1.randomOf(shuffleArray);
        newArray.push(item);
        shuffleArray = remove_1.remove(shuffleArray, item);
    }
    return newArray;
}
exports.shuffle = shuffle;
//# sourceMappingURL=shuffle.js.map