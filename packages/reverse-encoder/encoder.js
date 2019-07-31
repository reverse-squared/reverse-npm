"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
const errorCache = new Map();
const errorCacheReverse = new Map();
function encode(value) {
    let code;
    if (errorCache.has(value)) {
        code = errorCache.get(value);
    }
    else {
        let i = 0;
        do {
            code = generator_1.generateID();
            i++;
            if (i > 100) {
                throw new Error('The ID Generator for @reverse/encoder could not generate a new code for the '
                    + 'given string. Try setting the ID Generator to something else.');
            }
        } while (errorCacheReverse.has(code));
        errorCache.set(value, code);
        errorCacheReverse.set(code, value);
    }
    return code;
}
function decode(code) {
    return errorCacheReverse.get(code);
}
module.exports = {
    encode: encode,
    decode: decode,
};
//# sourceMappingURL=encoder.js.map