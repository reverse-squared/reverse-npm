"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emitter {
    constructor() {
        this.listenerMap = new Map();
    }
    addListener(event, callback) { return this.on(event, callback); }
    removeListener(event, callback) { return this.off(event, callback); }
    on(event, callback) {
        const listeners = this.listenerMap.get(event);
        if (listeners) {
            listeners.add(callback);
        }
    }
    off(event, callback) {
        const listeners = this.listenerMap.get(event);
        if (listeners) {
            listeners.delete(callback);
        }
    }
    removeAllListener(event) {
        this.listenerMap.delete(event);
    }
    emit(event, ...args) {
        const listeners = this.listenerMap.get(event);
        if (listeners) {
            listeners.forEach((callback) => callback(...args));
        }
    }
}
exports.Emitter = Emitter;
//# sourceMappingURL=Emitter.js.map