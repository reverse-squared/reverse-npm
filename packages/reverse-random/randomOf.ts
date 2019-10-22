/**
 * Returns a random element from an array.
 */
export function randomOf<T>(list: ReadonlyArray<T>): T {
  if(!Array.isArray(list)) {
    throw new TypeError('Passed array must be an array.');
  }
  
  return list[Math.floor(Math.random() * list.length)];
}
