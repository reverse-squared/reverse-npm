import { moveIndex } from './moveIndex';

describe('moveIndex(array, oldIndex, newIndex)', () => {
  it('Moving items returns a correct array.', () => {
    const array = [1, 2, 3];

    expect(moveIndex(array, 0, 1)).toEqual([2, 1, 3]);
  });
  it('Providing two same indexes returns the same array.', () => {
    const array = [1, 2, 3];

    expect(moveIndex(array, 0, 0)).toEqual(array);
  });
  it('Providing non-numbers throws error.', () => {
    const array = [1, 2, 3];

    expect(() => {
      moveIndex(array, -1, 1);
    }).toThrowError('Provided indexes must not be negative.');
    expect(() => {
      moveIndex(array, 0, -1);
    }).toThrowError('Provided indexes must not be negative.');
    expect(() => {
      moveIndex(array, -2, -1);
    }).toThrowError('Provided indexes must not be negative.');
  });
  it('Providing a non-number throws error.', () => {
    const array = [1, 2, 3];

    expect(() => {
      moveIndex(array, null as any, 1);
    }).toThrowError(('Provided indexes must be a number.'));
    expect(() => {
      moveIndex(array, 0, null as any);
    }).toThrowError(('Provided indexes must be a number.'));
    expect(() => {
      moveIndex(array, null as any, null as any);
    }).toThrowError(('Provided indexes must be a number.'));
  });
  it('Providing a non-array throws error.', () => {
    expect(() => {
      moveIndex(0 as any, 0, 1);
    }).toThrowError('Array to modify must be an array.');
  });
});
