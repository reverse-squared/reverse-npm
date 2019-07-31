"use strict";
const MissingItem = Symbol('MissingItem');
const randomOf = require('./randomOf');
function randomList(list, items = 1, requiredValues = []) {
    const requiredValuesPositions = requiredValues.map(() => -1);
    const values = Array(items).fill(MissingItem);
    requiredValues.forEach((item, i) => {
        let position;
        do {
            position = Math.floor(Math.random() * items);
        } while (requiredValuesPositions.includes(position));
        requiredValuesPositions[i] = position;
    });
    requiredValuesPositions.forEach((position, i) => {
        values[position] = requiredValues[i];
    });
    return values.map((item) => {
        if (item === MissingItem) {
            return randomOf(list);
        }
        return item;
    });
}
module.exports = randomList;
//# sourceMappingURL=randomList.js.map