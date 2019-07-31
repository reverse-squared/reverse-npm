// makes something into a class
export function classify<Args extends any[], Return>(func: (...args: Args) => void): { new(...args: Args): Return, (...args: Args): Return } {
  const classFunction = function(...args: Args) {
    return new func(...args);
  };
  classFunction.name = func.name;
  return classFunction as any;
}
