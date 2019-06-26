/**
 * Returns a random element from an array.
 * @param {Array} list The array to pick from.
 * @returns {any} The returned item from the array
 */
function randomOf(list) {
  return list[Math.floor(Math.random() * list.length)];
}

module.exports = randomOf;