import { plural } from './plural';

describe('plural(number, word)', () => {
  it('Passing a non-number throws error.', () =>{
    expect(() => {
      plural('0' as any, 'Dog');
    }).toThrowError('Passed number must be typeof number.');
  });
  it('Passing a non-word throws error.', () =>{
    expect(() => {
      plural(0, 0 as any);
    }).toThrowError('Passed word must be typeof string.');
  });
  it('Words get plural-ized correctly.', () => {
    expect(plural(0, 'Dog')).toBe('Dogs');
    expect(plural(1, 'Dog')).toBe('Dog');
    expect(plural(69, 'Dog')).toBe('Dogs');
    expect(plural(420, 'Dog')).toBe('Dogs');
    expect(plural(6969, 'Dog')).toBe('Dogs');
  });
});
