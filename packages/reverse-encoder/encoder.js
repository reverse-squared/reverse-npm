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
    code = Math.floor(Math.pow(Math.random() * 2, 24)).toString(16).toUpperCase().padStart(4, '0');
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
