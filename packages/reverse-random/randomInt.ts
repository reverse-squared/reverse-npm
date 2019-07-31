/**
 * Generates a random whole number between two values.
 */
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export = randomInt;
