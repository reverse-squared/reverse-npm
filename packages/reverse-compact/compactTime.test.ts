import { compactTime } from './compactTime';

describe('compactTime(seconds)', () => {
  it('Passing a non-number throws error.', () => {
    expect(() => {
      compactTime('a' as any);
    }).toThrowError('The amount of seconds provided must be a number.');
  });
  it('Compacting negative time doesn\'t work.', () => {
    expect(() => {
      compactTime(-100);
    }).toThrowError('The amount of seconds provided must be a positive number.');
  });
  it('Compacting time works.', () => {
    expect(compactTime(42069)).toBe('11 Hours 41 Minutes 9 Seconds');
    expect(compactTime(6969696)).toBe('80 Days 16 Hours 1 Minute 36 Seconds');
    expect(compactTime(0)).toBe('0 Seconds');
  });
});
