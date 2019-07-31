"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commaNumber = require("comma-number");
const mapLengthToLetter_1 = require("./mapLengthToLetter");
function compactMiniNumber(num) {
    if (typeof num !== 'number') {
        return 'NaN';
    }
    if (Math.floor(num) < 1000) {
        return Math.floor(num).toString();
    }
    const letter = mapLengthToLetter_1.default[Math.floor((Math.round(num).toString().length - 1) / 3) * 3 + 1];
    return commaNumber(num, '.').substring(0, 3).replace(/\.$/, '') + letter;
}
exports.compactMiniNumber = compactMiniNumber;
//# sourceMappingURL=compactMiniNumber.js.map