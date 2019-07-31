"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classify(func) {
    const classFunction = function (...args) {
        return new func(...args);
    };
    classFunction.name = func.name;
    return classFunction;
}
exports.classify = classify;
//# sourceMappingURL=classify.js.map