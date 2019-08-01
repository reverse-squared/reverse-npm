export class SimpleEmitter<Args extends any[]> {
  private listeners = new Set<(...args: Args) => void>();

  addListener(callback: (...args: Args) => void) { return this.on(callback); }
  removeListener(callback: (...args: Args) => void) { return this.off(callback); }

  on(callback: (...args: Args) => void) {
    this.listeners.add(callback);
  }
  off(callback: (...args: Args) => void) {
    this.listeners.delete(callback);
  }

  removeAllListener() {
    this.listeners.clear();
  }
  emit(...args: Args) {
    this.listeners.forEach((callback) => callback(...args));
  }
}
