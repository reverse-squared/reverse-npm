const classify = require('@reverse/utils/classify');
const SimpleState = require('./SimpleState');
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
function StorageState(name, initialValue = null) {
    if (storageStateCache[name]) {
        return storageStateCache[name];
    }
    const state = new SimpleState(resolveValue(name, initialValue));
    state.onChange((value) => {
        localStorage.setItem(name, JSON.stringify(value));
    });
    state.reset = () => {
        localStorage.removeItem(name);
        state.set(initialValue);
    };
    storageStateCache[name] = state;
    return state;
}
module.exports = classify(StorageState);
//# sourceMappingURL=StorageState.js.map