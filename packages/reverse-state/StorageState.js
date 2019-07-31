"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classify_1 = require("@reverse/utils/classify");
const SimpleState_1 = require("./SimpleState");
const storageStateCache = {};
function resolveValue(name, fallback) {
    try {
        if (localStorage.getItem(name)) {
            return JSON.parse(localStorage.getItem(name));
        }
    }
    catch (ignored) {
    }
    return fallback;
}
exports.StorageState = classify_1.classify(function StorageState(name, initialValue = null) {
    if (storageStateCache[name]) {
        return storageStateCache[name];
    }
    const state = new SimpleState_1.SimpleState(resolveValue(name, initialValue));
    state.onChange((value) => {
        localStorage.setItem(name, JSON.stringify(value));
    });
    state.reset = () => {
        localStorage.removeItem(name);
        state.set(initialValue);
    };
    storageStateCache[name] = state;
    return state;
});
//# sourceMappingURL=StorageState.js.map