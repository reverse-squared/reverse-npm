"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleEmitter_1 = require("@reverse/emitter/SimpleEmitter");
class SimpleState {
    constructor(initialValue) {
        this.emitter = new SimpleEmitter_1.SimpleEmitter();
        this.value = initialValue;
    }
    get() {
        return this.value;
    }
    set(newValue) {
        this.value = newValue;
        this.emitter.emit(newValue);
    }
    map(transformer, ...args) {
        this.value = transformer(this.value);
        this.emitter.emit(this.value);
    }
    addListener(cb) {
        this.emitter.addListener(cb);
    }
    onChange(cb) {
        this.emitter.addListener(cb);
    }
    removeListener(cb) {
        this.emitter.removeListener(cb);
    }
    offChange(cb) {
        this.emitter.removeListener(cb);
    }
}
exports.SimpleState = SimpleState;
//# sourceMappingURL=SimpleState.js.map