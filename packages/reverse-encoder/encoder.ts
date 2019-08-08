import { generateID } from './generator';

const errorCache = new Map<string, string>();
const errorCacheReverse = new Map<string, string>();

/**
 * Encodes a value to a six character code.
 */
export function encode(value: string) {
  if(typeof value !== 'string') {
    throw new TypeError('Value must be a string.');
  }

  let code;
  if(errorCache.has(value)) {
    code = errorCache.get(value);
  } else {
    let i = 0;
    do {
      code = generateID();
      i++;
      if(i > 100) {
        throw new Error(
          'The ID Generator for @reverse/encoder could not generate a new code for the '
          + 'given string. Try setting the ID Generator to something else.'
        );
      }
    } while (errorCacheReverse.has(code));
    errorCache.set(value, code);
    errorCacheReverse.set(code, value);
  }

  return code;
}

/**
 * Decodes a message encoded by `encode()`.
 */
export function decode(code: string) {
  return errorCacheReverse.get(code);
}
