const generateID = require('./generator').generateID;

const errorCache = new Map();
const errorCacheReverse = new Map();

/**
 * Encodes a value to a six character code.
 * @param {any} value The value to encode.
 */
function encode(value) {
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
 * @param {String} code The code to decode.
 * @returns {any} The returned value.
 */
function decode(code) {
  return errorCacheReverse.get(code);
}

module.exports = {
  encode: encode,
  decode: decode,
};
