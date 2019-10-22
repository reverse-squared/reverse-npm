/**
 * Returns an array of all the unique values of an array. (i.e. Removes duplicate values.)
 * @param {Array} array The array to modify.
 * @returns {Array} The array with only the unique values.
 */
export function unique<T>(array: T[]): T[] {
  if(!Array.isArray(array)) {
    throw new TypeError('Array to modify must be an array.');
  }
  
  return [...new Set(array)];
}
