/**
 * Removes an element from an array by it's value.
 */
export function remove<T>(array: T[], value: T): T[] {
  let loop = true;
  return array.filter((x) => loop && (x !== value || (loop = false)));
}
