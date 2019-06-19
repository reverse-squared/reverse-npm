const classify = require('@reverse/utils/classify');

// A single channel EventEmitter.
function Emitter() {
  const listenerMap = new Map();

  this.addListener = function(event, callback) {
    if(!listenerMap.has(event)) {
      listenerMap.set(event, new Set());
    }
    listenerMap.get(event).add(callback);
  };
  this.removeListener = function(event, callback) {
    if(!listenerMap.has(event)) {
      return;
    }
    listenerMap.get(event).delete(callback);
  };
  this.removeAllListeners = function(event) {
    if(!listenerMap.has(event)) {
      return;
    }
    listenerMap.get(event).clear(callback);
  };
  this.emit = function(event, ...args) {
    if (!listenerMap.has(event)) {
      return;
    }
    listenerMap.forEach((callback) => callback(...args));
  };
}

module.exports = classify(Emitter);
