"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function format(format, ...variables) {
    return format.replace(/\$[0-9]+/g, (x) => String(variables[parseInt(x.substring(1)) - 1]));
}
exports.format = format;
//# sourceMappingURL=format.js.map