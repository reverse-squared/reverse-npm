"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MissingItem = Symbol('MissingItem');
const randomOf_1 = require("./randomOf");
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
            return randomOf_1.randomOf(list);
        }
        return item;
    });
}
exports.randomList = randomList;
//# sourceMappingURL=randomList.js.map