/**
 * Removes an element from an array by it's index.
 */
function removeAt<T>(array: T[], index: number): T[] {
  return array.filter((item, i) => i !== index);
}

export = removeAt;
