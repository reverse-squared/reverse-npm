import { randomInt } from './randomInt';
import { type } from 'os';

describe('randomInt(min, max)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      randomInt('0' as any, 1);
    }).toThrowError('Provided range must be numbers.');
    expect(() => {
      randomInt(0, '1' as any);
    }).toThrowError('Provided range must be numbers.');
    expect(() => {
      randomInt('0' as any, '1' as any);
    }).toThrowError('Provided range must be numbers.');
  });
  it('Returns number.', () => {
    expect(typeof randomInt(0, 1)).toBe('number');
  });
  it('If min is greater than max, throw error.', () => {
    expect(() => {
      randomInt(1, 0);
    }).toThrowError('Minimum number must be less than or equal to the maximum number.');
  });
  it('Returned numbers are within the range.', () => {
    for(let i = 0; i < 1000;  i++) {
      const number = randomInt(0, 1);
      expect(number === 0 || number === 1).toBe(true);
    }
  });
});
