/**
 * Returns a random element from an array.
 */
export function randomOf<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}
