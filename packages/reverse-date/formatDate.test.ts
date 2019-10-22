import { formatDate } from './formatDate';

describe('formatDate(date)', () => {
  it('Passing a non-date throws error.', () => {
    expect(() => {
      formatDate('a' as any);
    }).toThrowError('Passed date must be typeof Date.');
  });
  it('Formatting dates work.', () => {
    expect(formatDate(new Date(1069, 3, 20))).toBe('1069-04-20 at 12:00am');
  });
});
