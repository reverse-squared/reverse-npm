import { classify } from '@reverse/utils/classify';

export interface ISimpleEmitter<Args extends any[]> {
  addListener(callback: (...args: Args) => void): void;
  removeListener(callback: (...args: Args) => void): void;
  removeAllListeners(): void;
  emit(...args: Args): void;
}

// A single channel EventEmitter.
export const SimpleEmitter = classify<[], ISimpleEmitter<any[]>>(function SimpleEmitter<Args extends any[]>() {
  type Callback = (...args: Args) => void;
  const listeners = new Set<Callback>();

  this.addListener = function (callback: Callback) {
    listeners.add(callback);
  };
  this.removeListener = function (callback: Callback) {
    listeners.delete(callback);
  };
  this.removeAllListeners = function () {
    listeners.clear();
  };
  this.emit = function(...args: Args) {
    listeners.forEach((callback) => callback(...args));
  };
});
