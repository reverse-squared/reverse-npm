import { removeAt } from './removeAt';

describe('removeAt(array, index)', () => {
  it('Providing a non-array throws error.', () => {
    expect(() => {
      removeAt(0 as any, 0);
    }).toThrowError('Array to modify must be an array.');
  });
  it('Providing a non-number index throws error.', () => {
    const array = [1, 2, 3];

    expect(() => {
      removeAt(array, 'a' as any);
    }).toThrowError('The index to remove must be a number.');
  });
  it('Removing value returns correct array.', () => {
    const array = [1, 2, 3];

    expect(removeAt(array, 1)).toEqual([1, 3]);
    expect(removeAt(array, 0)).toEqual([2, 3]);
  })
});
