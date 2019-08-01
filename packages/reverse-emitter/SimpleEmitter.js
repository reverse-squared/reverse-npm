"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleEmitter {
    constructor() {
        this.listeners = new Set();
    }
    addListener(callback) { return this.on(callback); }
    removeListener(callback) { return this.off(callback); }
    on(callback) {
        this.listeners.add(callback);
    }
    off(callback) {
        this.listeners.delete(callback);
    }
    removeAllListener() {
        this.listeners.clear();
    }
    emit(...args) {
        this.listeners.forEach((callback) => callback(...args));
    }
}
exports.SimpleEmitter = SimpleEmitter;
//# sourceMappingURL=SimpleEmitter.js.map