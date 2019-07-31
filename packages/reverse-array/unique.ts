/**
 * Returns an array of all the unique values of an array. (i.e. Removes duplicate values.)
 * @param {Array} array The array to modify.
 * @returns {Array} The array with only the unique values.
 */
function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export = unique;
