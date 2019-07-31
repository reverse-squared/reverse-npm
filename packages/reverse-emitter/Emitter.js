"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classify_1 = require("@reverse/utils/classify");
exports.Emitter = classify_1.classify(function Emitter() {
    const listenerMap = new Map();
    this.addListener = function (event, callback) {
        if (!listenerMap.has(event)) {
            listenerMap.set(event, new Set());
        }
        listenerMap.get(event).add(callback);
    };
    this.removeListener = function (event, callback) {
        if (!listenerMap.has(event)) {
            return;
        }
        listenerMap.get(event).delete(callback);
    };
    this.removeAllListeners = function (event) {
        if (!listenerMap.has(event)) {
            return;
        }
        listenerMap.get(event).clear();
    };
    this.emit = function (event, ...args) {
        if (!listenerMap.has(event)) {
            return;
        }
        listenerMap.get(event).forEach((callback) => callback(...args));
    };
});
//# sourceMappingURL=Emitter.js.map