/**
 * Removes an element from an array by it's value.
 * @param {Array} array The array to modify.
 * @param {any} value The element to remove.
 */
function removeBy(array, value) {
  const index = array.indexOf(value);

  if(index !== -1) {
    return array.splice(index, 1);
  }
  return array;
}

module.exports = removeBy;
