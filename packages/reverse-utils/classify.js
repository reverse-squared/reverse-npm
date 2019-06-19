// makes something into a class
function classify(func) {
  const classFunction = function(...args) {
    return new func(...args);
  }
  classFunction.name = func.name;
  return classFunction;
}

module.exports = classify;