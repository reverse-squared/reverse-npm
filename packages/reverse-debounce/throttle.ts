export function throttle<Args extends any[]>(func: (...args: Args) => void, waitTime: number) {
  let timeout = null;
  let previous = 0;

  var later = function(...args: Args) {
    previous = Date.now();
    timeout = null;
    func(...args);
  };

  return function(...args: Args) {
    const now = Date.now();
    const remaining = waitTime - (now - previous);
    if (remaining <= 0 || remaining > waitTime) {
      if (timeout) {
        clearTimeout(timeout);
      }
      later(...args);
    } else if (!timeout) { //null timeout -> no pending execution
      timeout = setTimeout(later, remaining, ...args);
    }
  };
};
