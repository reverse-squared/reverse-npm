export function createArray<T>(length: number, map: (index: number) => T): T[] {
  if (typeof map !== 'function') throw new TypeError('"map" is not a function');

  return Array(length).fill(null).map((value, index) => map(index));
}
