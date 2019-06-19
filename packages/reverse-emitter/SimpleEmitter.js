const classify = require('@reverse/utils');

// A single channel EventEmitter.
function SimpleEmitter() {
  const listeners = new Set();

  this.addListener = function (callback) {
    listeners.add(callback);
  };
  this.removeListener = function (callback) {
    listeners.delete(callback);
  };
  this.removeAllListeners = function () {
    listeners.clear();
  };
  this.emit = function(...args) {
    listeners.forEach((callback) => callback(...args));
  };
}

module.exports = classify(SimpleEmitter);
