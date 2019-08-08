import { compactNumber } from './compactNumber';

describe('compactNumber(num)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      compactNumber('h' as any, false);
    }).toThrowError('The number provided must be a number.');
  });
  it('Compacting 1000 numbers compacts correctly.', () => {
    expect(compactNumber(1000, false)).toBe('1,000');
    expect(compactNumber(1200, false)).toBe('1,200');
    expect(compactNumber(1234, false)).toBe('1,234');
  });
  it('Compacting numbers correctly.', () => {
    expect(compactNumber(1000000, false)).toBe('1,000,000');
    expect(compactNumber(1000000000, false)).toBe('1.00B');
    expect(compactNumber(1000000000000, false)).toBe('1.00T');
    expect(compactNumber(1000000000000000, false)).toBe('1.00Q');
    expect(compactNumber(1000000000000000000, false)).toBe('1.00q');
    expect(compactNumber(1000000000000000000000, false)).toBe('1.00S');
    expect(compactNumber(1000000000000000000000000, false)).toBe('1.00s');
    expect(compactNumber(1000000000000000000000000000, false)).toBe('1.00O');
    expect(compactNumber(1000000000000000000000000000000, false)).toBe('1.00N');
    expect(compactNumber(1000000000000000000000000000000000, false)).toBe('1.00D');
  });
  it('Don\'t compact numbers less than 1000.', () => {
    expect(compactNumber(420, false)).toBe('420');
    expect(compactNumber(69, false)).toBe('69');
  });
  it('Compacting numbers over 1D don\'t compact.', () => {
    expect(compactNumber(1000000000000000000000000000000000000, false)).toMatch(/1e\+\d{2,3}/);
  });
});
