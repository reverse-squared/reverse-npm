/**
 * Capitalizes the first letter of a string.
 */
export function capitalize(string: string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1);
}
