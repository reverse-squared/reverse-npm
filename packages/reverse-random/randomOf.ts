/**
 * Returns a random element from an array.
 */
export function randomOf<T>(list: ReadonlyArray<T>): T {
  return list[Math.floor(Math.random() * list.length)];
}
