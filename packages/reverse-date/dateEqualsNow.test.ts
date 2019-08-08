import { dateEqualsNow } from './dateEqualsNow';

describe('dateEqualsNow(month, date, year)', () => {
  it('Passing non-numbers as parameters throws error.', () => {
    const now = new Date();

    expect(() => {
      dateEqualsNow('a' as any, now.getDate(), now.getFullYear());
    }).toThrowError('Passed date values must be a number.');
    expect(() => {
      dateEqualsNow(now.getMonth() + 1, 'a' as any, now.getFullYear());
    }).toThrowError('Passed date values must be a number.');
    expect(() => {
      dateEqualsNow(now.getMonth() + 1, now.getDate(), 'a' as any);
    }).toThrowError('Passed date values must be a number.');
    expect(() => {
      dateEqualsNow('a' as any, 'a' as any, now.getFullYear());
    }).toThrowError('Passed date values must be a number.');
    expect(() => {
      dateEqualsNow('a' as any, now.getDate(), 'a' as any);
    }).toThrowError('Passed date values must be a number.');
    expect(() => {
      dateEqualsNow(now.getMonth() + 1, 'a' as any, 'a' as any);
    }).toThrowError('Passed date values must be a number.');
    expect(() => {
      dateEqualsNow('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Passed date values must be a number.');
  });
  it('Checking dates work.', () => {
    const now = new Date();

    expect(dateEqualsNow(now.getMonth() + 1, now.getDate(), now.getFullYear())).toBe(true);
    expect(dateEqualsNow(4, 20, 1069)).toBe(false);
  });
});
