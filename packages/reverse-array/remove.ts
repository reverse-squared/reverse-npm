/**
 * Removes an element from an array by it's value.
 */
export function remove<T>(array: T[], value: T): T[] {
  return array.filter((x) => x !== value);
}
