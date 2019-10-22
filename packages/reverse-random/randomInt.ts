/**
 * Generates a random whole number between two values.
 */
export function randomInt(min: number, max: number) {
  if(typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Provided range must be numbers.');
  }
  if(min > max) {
    throw new TypeError('Minimum number must be less than or equal to the maximum number.');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
