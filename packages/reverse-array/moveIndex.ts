/**
 * Moves an element in an array to a new part of the array.
 */
export function moveIndex<T>(array: T[], oldIndex: number, newIndex: number): T[] {
  array = array.concat();
  if(newIndex >= array.length) {
    let k = newIndex - array.length + 1;
    while(k--) {
      array.push(null as any);
    }
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}
