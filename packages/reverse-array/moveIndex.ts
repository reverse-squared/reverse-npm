/**
 * Moves an element in an array to a new part of the array.
 */
export function moveIndex<T>(array: T[], oldIndex: number, newIndex: number): T[] {
  if(!Array.isArray(array)) {
    throw new TypeError('Array to modify must be an array.');
  }
  if(typeof oldIndex !== 'number' || typeof newIndex !== 'number') {
    throw new TypeError('Provided indexes must be a number.');
  }
  if(oldIndex < 0 || newIndex < 0) {
    throw new TypeError('Provided indexes must not be negative.');
  }

  array = array.concat();
  if(newIndex >= array.length) {
    let k = newIndex - array.length + 1;
    while(k--) {
      array.push(null as any);
    }
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}
