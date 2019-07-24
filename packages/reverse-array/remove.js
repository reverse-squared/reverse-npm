/**
 * Removes an element from an array by it's value.
 * @param {Array} array The array to modify.
 * @param {any} value The element to remove.
 */
function remove(array, value) {
  return array.filter((x) => x !== value);
}

module.exports = remove;
