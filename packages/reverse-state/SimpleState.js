const SimpleEmitter = require('@reverse/emitter/SimpleEmitter');
const classify = require('@reverse/utils/classify');

function SimpleState(initialValue = null) {
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
}

module.exports = classify(SimpleState);
