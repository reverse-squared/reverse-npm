import { SimpleEmitter } from '@reverse/emitter';

export class SimpleState<Type> {
  protected value: Type;
  protected emitter: SimpleEmitter<[Type]> = new SimpleEmitter();

  constructor(initialValue: Type) {
    this.value = initialValue;
  }

  get() {
    return this.value;
  }
  set(newValue: Type) {
    this.value = newValue;
    this.emitter.emit(newValue);
  }

  map<Args extends any[]>(transformer: (value: Type, ...args: Args[]) => Type, ...args: Args) {
    this.value = transformer(this.value);
    this.emitter.emit(this.value);
  }

  addListener(cb: (value: Type) => void) {
    this.emitter.addListener(cb);
  }
  onChange(cb: (value: Type) => void) {
    this.emitter.addListener(cb);
  }
  removeListener(cb: (value: Type) => void) {
    this.emitter.removeListener(cb);
  }
  offChange(cb: (value: Type) => void) {
    this.emitter.removeListener(cb);
  }
}
