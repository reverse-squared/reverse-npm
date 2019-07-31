"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function catchFallback(cb, ifError) {
    try {
        return cb();
    }
    catch (e) {
        return ifError;
    }
}
exports.catchFallback = catchFallback;
function catchFallbackAsync(cb, ifError) {
    return cb().catch(() => {
        return ifError;
    });
}
exports.catchFallbackAsync = catchFallbackAsync;
//# sourceMappingURL=catchFallback.js.map