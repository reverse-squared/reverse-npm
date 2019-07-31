import { classify } from '@reverse/utils/classify';
import { SimpleState } from './SimpleState';

const storageStateCache = {};

function resolveValue(name, fallback) {
  try {
    if(localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name));
    }
  } catch(ignored) {
    // fall back
  }
  return fallback;
}

export const StorageState = classify(function StorageState(name, initialValue = null) {
  // Storage States are cached once created.
  if(storageStateCache[name]) {
    return storageStateCache[name];
  }

  // Make a state
  const state = new SimpleState(resolveValue(name, initialValue)) as any;

  //
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
