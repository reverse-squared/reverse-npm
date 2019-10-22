const MissingItem = Symbol('MissingItem');
import { randomOf } from './randomOf';

/**
 * Picks multiple values from an array.
 */
export function randomList<T>(list: ReadonlyArray<T>, items: number = 1, requiredValues: ReadonlyArray<T> = []): ReadonlyArray<T> {
  if(!Array.isArray(list)) {
    throw new TypeError('Passed list must be an array.');
  }
  if(typeof items !== 'number') {
    throw new TypeError('Item count must be a number.');
  }
  if(!Array.isArray(requiredValues)) {
    throw new TypeError('Required values must be an array.');
  }
  
  const requiredValuesPositions = requiredValues.map(() => -1);
  const values = Array(items).fill(MissingItem);
  requiredValues.forEach((item, i) => {
    let position;
    do {
      position = Math.floor(Math.random() * items);
    } while (requiredValuesPositions.includes(position));

    requiredValuesPositions[i] = position;
  });
  requiredValuesPositions.forEach((position, i) => {
    values[position] = requiredValues[i];
  });
  return values.map((item) => {
    if (item === MissingItem) {
      return randomOf(list);
    }
    return item;
  });
}
