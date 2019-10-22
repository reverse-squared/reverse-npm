/**
 * Removes an element from an array by it's index.
 */
export function removeAt<T>(array: T[], index: number): T[] {
  if(!Array.isArray(array)) {
    throw new TypeError('Array to modify must be an array.');
  }
  if(typeof index !== 'number') {
    throw new TypeError('The index to remove must be a number.');
  }

  return array.filter((item, i) => i !== index);
}
