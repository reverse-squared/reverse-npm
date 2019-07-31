import { SimpleEmitter, ISimpleEmitter } from '@reverse/emitter/SimpleEmitter';
import { classify } from '@reverse/utils/classify';

export interface ISimpleState<Value> extends ISimpleEmitter<[Value]> {
  get(): Value;
  set(value: Value): void;
  map(transformer: (previousValue: Value) => Value): void;
  emit: never;
}

export const SimpleState = classify(function SimpleState(initialValue = null) {
  const emitter = new SimpleEmitter();
  let value = initialValue;

  this.get = function() {
    return value;
  };
  this.set = function(newValue) {
    value = newValue;
    emitter.emit();
  };
  this.map = function(transformer) {
    value = transformer(value);
    emitter.emit();
  };
  this.addListener = emitter.addListener;
  this.removeListener = emitter.removeListener;
  this.removeAllListeners = emitter.removeAllListeners;
});
