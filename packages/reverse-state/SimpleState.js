"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleEmitter_1 = require("@reverse/emitter/SimpleEmitter");
const classify_1 = require("@reverse/utils/classify");
exports.SimpleState = classify_1.classify(function SimpleState(initialValue = null) {
    const emitter = new SimpleEmitter_1.SimpleEmitter();
    let value = initialValue;
    this.get = function () {
        return value;
    };
    this.set = function (newValue) {
        value = newValue;
        emitter.emit();
    };
    this.map = function (transformer) {
        value = transformer(value);
        emitter.emit();
    };
    this.addListener = emitter.addListener;
    this.removeListener = emitter.removeListener;
    this.removeAllListeners = emitter.removeAllListeners;
});
//# sourceMappingURL=SimpleState.js.map