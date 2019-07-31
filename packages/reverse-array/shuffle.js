"use strict";
function shuffle(array) {
    let currentIndex = array.length, randomIndex, temporaryValue;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
module.exports = shuffle;
//# sourceMappingURL=shuffle.js.map