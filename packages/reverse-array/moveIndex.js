"use strict";
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
module.exports = moveIndex;
//# sourceMappingURL=moveIndex.js.map