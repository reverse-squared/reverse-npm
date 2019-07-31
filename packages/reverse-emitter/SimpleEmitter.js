"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classify_1 = require("@reverse/utils/classify");
exports.SimpleEmitter = classify_1.classify(function SimpleEmitter() {
    const listeners = new Set();
    this.addListener = function (callback) {
        listeners.add(callback);
    };
    this.removeListener = function (callback) {
        listeners.delete(callback);
    };
    this.removeAllListeners = function () {
        listeners.clear();
    };
    this.emit = function (...args) {
        listeners.forEach((callback) => callback(...args));
    };
});
//# sourceMappingURL=SimpleEmitter.js.map