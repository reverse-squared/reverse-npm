import { randomOf } from './randomOf';

describe('randomOf(list)', () => {
  it('Passing a non-array throws error.', () => {
    expect(() => {
      randomOf('a' as any);
    }).toThrowError('Passed array must be an array.');
  });
  it('Returned value is in the original array.', () => {
    const array = [1, 2, 3];

    for(let i = 0; i < 100; i++) {
      expect(array).toContain(randomOf(array));
    }
  });
  it('Providing a blank array returns undefined.', () => {
    expect(randomOf([])).toBe(undefined);
  });
});
