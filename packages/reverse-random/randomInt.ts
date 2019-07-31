/**
 * Generates a random whole number between two values.
 */
export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}