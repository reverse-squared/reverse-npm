"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function moveIndex(array, oldIndex, newIndex) {
    if (newIndex >= array.length) {
        let k = newIndex - array.length + 1;
        while (k--) {
            array.push(null);
        }
    }
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    return array;
}
exports.moveIndex = moveIndex;
//# sourceMappingURL=moveIndex.js.map