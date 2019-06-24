/**
 * Moves an element in an array to a new part of the array.
 * @param {Array} array The array to modify.
 * @param {Number} oldIndex The index of the item to move.
 * @param {Number} newIndex The new index of the item to move.
 */
function moveIndex(array, oldIndex, newIndex) {
  if(newIndex >= array.length) {
    let k = newIndex - array.length + 1;
    while(k--) {
      array.push(null);
    }
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}

module.exports = moveIndex;
