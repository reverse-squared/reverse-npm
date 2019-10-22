/**
 * Makes a word plural if the number is not one.
 */
export function plural(number: number, word: string) {
  if(typeof number !== 'number') {
    throw new TypeError('Passed number must be typeof number.');
  }
  if(typeof word !== 'string') {
    throw new TypeError('Passed word must be typeof string.');
  }
  
  return `${word}${number === 1 ? '' : 's'}`;
}
