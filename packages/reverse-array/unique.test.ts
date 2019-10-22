import { unique } from './unique';

describe('unique(array)', () => {
  it('Providing a non-array throws error.', () => {
    expect(() => {
      unique(0 as any);
    }).toThrowError('Array to modify must be an array.');
  });
  it('Removing values provides a unique array.', () => {
    const array = [1, 1, 2, 3, 3, 4, 4, 4, 4, 4, 5, 6];

    expect(unique(array)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
