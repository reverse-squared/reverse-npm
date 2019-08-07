import { remove } from './remove';

describe('remove(array, value)', () => {
  it('Removing values returns a correct array.', () => {
    const array = [1, 2, 3];

    expect(remove(array, 2)).toEqual([1, 3]);
  });
  it('Removing multiple values returns a correct array.', () => {
    const array = [1, 2, 3, 1, 2, 3];

    expect(remove(array, 2)).toEqual([1, 3, 1, 3]);
  });
  it('Removing a value that doesn\'t exist returns same array.', () => {
    const array = [1, 2, 3];

    expect(remove(array, 4)).toEqual(array);
  });
  it('Providing a non-array throws error.', () => {
    expect(() => {
      remove(0 as any, 2);
    }).toThrowError('Array to modify must be an array.');
  });
});
