/**
 * Generates a random whole number between two values.
 * @param {Number} min The minimum number to generate inclusive
 * @param {Number} max The maximum number to generate inclusive.
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = randomInt;
