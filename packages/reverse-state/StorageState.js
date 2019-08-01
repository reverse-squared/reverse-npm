"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleState_1 = require("./SimpleState");
const storageStateCache = {};
function resolveValue(name, fallback) {
    try {
        if (localStorage.getItem(name)) {
            return JSON.parse(localStorage.getItem(name) || '!');
        }
    }
    catch (ignored) {
    }
    return fallback;
}
class StorageState extends SimpleState_1.SimpleState {
    constructor(name, initialValue) {
        if (name in storageStateCache) {
            return storageStateCache[name];
        }
        super(resolveValue(name, initialValue));
        this.name = name;
        this.initialValue = initialValue;
        this.onChange((value) => {
            localStorage.setItem(name, JSON.stringify(value));
        });
    }
    reset() {
        localStorage.removeItem(name);
        this.set(this.initialValue);
    }
}
//# sourceMappingURL=StorageState.js.map