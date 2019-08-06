export function createArray<T>(length: number, map: (index: number) => T): T[] {
  return Array(length).fill(null).map((value, index) => map(index));
}
