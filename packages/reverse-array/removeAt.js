/**
 * Removes an element from an array by it's index.
 * @param {Array} array The array to modify.
 * @param {Number} index The index to remove.
 * @returns {Array} The modified array.
 */
function removeAt(array, index) {
  return array.splice(index, 1);
}

module.exports = removeAt;
