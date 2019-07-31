"use strict";
const commaNumber = require("comma-number");
const mapLengthToLetter_1 = require("./mapLengthToLetter");
function compactNumber(num, zeroDecimal) {
    if (typeof num !== 'number') {
        return 'NaN';
    }
    if (Math.floor(num) < 10000000) {
        const comma = commaNumber(Math.round(num * 10) / 10);
        if (comma.includes('.')) {
            return comma;
        }
        if (zeroDecimal) {
            return comma + '.0';
        }
        return comma;
    }
    const letter = mapLengthToLetter_1.default[Math.floor((Math.round(num).toString().length - 1) / 3) * 3 + 1];
    return commaNumber(num, '.').substring(0, 4).replace(/\.$/, '') + letter;
}
module.exports = compactNumber;
//# sourceMappingURL=compactNumber.js.map