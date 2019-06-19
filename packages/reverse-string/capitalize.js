/**
 * Capitalizes the first letter of a string.
 * @param {String} string The string to modify.
 */
function capitalize(string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1);
}

module.exports = capitalize;
