export function debounce<Args extends any[]>(func: (...args: Args) => void, waitTime: number) {
  let timeout: number;

  return function (...args: Args) {
    clearTimeout(timeout);
    timeout = setTimeout(func, waitTime, ...args);
  };
};
