import { getEasterDate } from './getEasterDate';

describe('getEasterDate(year)', () => {
  it('Passing a non-number throws error.', () => {
    expect(() => {
      getEasterDate('a' as any);
    }).toThrowError('Passed year must be a number.');
  });
  it('Returns correct easter date.', () => {
    expect(getEasterDate(2019)).toBe('04.21');
    expect(getEasterDate(2018)).toBe('04.01');
  });
});
