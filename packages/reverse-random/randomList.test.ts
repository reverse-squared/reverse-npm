import { randomList } from './randomList';

describe('randomList(list, items, requiredValues)', () => {
  it('Passing a non-array list throws error.', () => {
    expect(() => {
      randomList('a' as any, 1, []);
    }).toThrowError('Passed list must be an array.');
  });
  it('Passing a non-number throws error.', () => {
    expect(() => {
      randomList([1, 2, 3], '1' as any, []);
    }).toThrowError('Item count must be a number.');
  });
  it('Passing a non-array required values array throws error.', () => {
    expect(() => {
      randomList([1, 2, 3], 1, 'a' as any);
    }).toThrowError('Required values must be an array.');
  });
  it('Returned value is an array.', () => {
    const result = randomList([1, 2, 3], 1, []);

    expect(Array.isArray(result)).toBe(true);
  });
  it('Required values show up in array.', () => {
    const result = randomList([1, 2, 3, 4, 5, 6, 7], 2, [1]);

    expect(result).toContain(1);
  });
  it('Requesting a zero length array returns a zero length array.', () => {
    const result = randomList([1, 2, 3, 4, 5, 6, 7], 0, []);

    expect(result.length).toBe(0);
  });
  it('Required values still appear if array length is zero.', () => {
    const result = randomList([1, 2, 3], 0, [1]);

    expect(result).toEqual([1]);
  });
});
