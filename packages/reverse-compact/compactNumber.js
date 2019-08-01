"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comma_number_1 = __importDefault(require("comma-number"));
const mapLengthToLetter_1 = __importDefault(require("./mapLengthToLetter"));
function compactNumber(num, zeroDecimal) {
    if (typeof num !== 'number') {
        return 'NaN';
    }
    if (Math.floor(num) < 10000000) {
        const comma = comma_number_1.default(Math.round(num * 10) / 10);
        if (comma.includes('.')) {
            return comma;
        }
        if (zeroDecimal) {
            return comma + '.0';
        }
        return comma;
    }
    const letter = mapLengthToLetter_1.default[Math.floor((Math.round(num).toString().length - 1) / 3) * 3 + 1];
    return comma_number_1.default(num, '.').substring(0, 4).replace(/\.$/, '') + letter;
}
exports.compactNumber = compactNumber;
//# sourceMappingURL=compactNumber.js.map