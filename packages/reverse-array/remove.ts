/**
 * Removes an element from an array by it's value.
 */
export function remove<T>(array: T[], value: T): T[] {
  if(!Array.isArray(array)) {
    throw new TypeError('Array to modify must be an array.');
  }

  return array.filter((x) => x !== value);
}
