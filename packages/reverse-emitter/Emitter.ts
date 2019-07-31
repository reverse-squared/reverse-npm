import { classify } from '@reverse/utils/classify';

export interface IEmitter<Args extends any[]> {
  addListener(callback: (event: string, ...args: Args) => void): void;
  removeListener(callback: (event: string, ...args: Args) => void): void;
  removeAllListeners(event: string): void;
  emit(event: string, ...args: Args): void;
}

// A single channel EventEmitter.
export const Emitter = classify<[], IEmitter<any[]>>(function Emitter() {
  const listenerMap = new Map<string, Set<Function>>();

  this.addListener = function(event: string, callback: Function) {
    if(!listenerMap.has(event)) {
      listenerMap.set(event, new Set());
    }
    listenerMap.get(event).add(callback);
  };
  this.removeListener = function(event: string, callback: Function) {
    if(!listenerMap.has(event)) {
      return;
    }
    listenerMap.get(event).delete(callback);
  };
  this.removeAllListeners = function(event: string) {
    if(!listenerMap.has(event)) {
      return;
    }
    listenerMap.get(event).clear();
  };
  this.emit = function(event: string, ...args: any[]) {
    if (!listenerMap.has(event)) {
      return;
    }
    listenerMap.get(event).forEach((callback) => callback(...args));
  };
});
