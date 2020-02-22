export class Emitter {
  private listenerMap = new Map<string, Set<Function>>();

  addListener(event: string, callback: Function) { return this.on(event, callback); }
  removeListener(event: string, callback: Function) { return this.off(event, callback);  }

  on(event: string, callback: Function) {
    const listeners = this.listenerMap.get(event);
    if (listeners) {
      listeners.add(callback);
    } else {
      this.listenerMap.set(event, new Set([ callback ]));
    }
  }
  off(event: string, callback: Function) {
    const listeners = this.listenerMap.get(event);
    if (listeners) {
      listeners.delete(callback);
      if(listeners.size === 0) {
        this.listenerMap.delete(event);
      }
    }
  }

  removeAllListener(event: string) {
    this.listenerMap.delete(event);
  }
  emit(event: string, ...args: any[]) {
    const listeners = this.listenerMap.get(event);
    if (listeners) {
      listeners.forEach((callback) => callback(...args));
    }
  }
}
