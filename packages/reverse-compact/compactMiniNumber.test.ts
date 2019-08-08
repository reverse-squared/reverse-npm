import { compactMiniNumber } from './compactMiniNumber';

describe('compactMiniNumber(num)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      compactMiniNumber('h' as any);
    }).toThrowError('The number provided must be a number.');
  });
  it('Compacting 1000 numbers compacts correctly.', () => {
    expect(compactMiniNumber(1000)).toBe('1.0K');
    expect(compactMiniNumber(1200)).toBe('1.2K');
    expect(compactMiniNumber(1234)).toBe('1.2K');
  });
  it('Compacting numbers correctly.', () => {
    expect(compactMiniNumber(1000000)).toBe('1.0M');
    expect(compactMiniNumber(1000000000)).toBe('1.0B');
    expect(compactMiniNumber(1000000000000)).toBe('1.0T');
    expect(compactMiniNumber(1000000000000000)).toBe('1.0Q');
    expect(compactMiniNumber(1000000000000000000)).toBe('1.0q');
    expect(compactMiniNumber(1000000000000000000000)).toBe('1.0S');
    expect(compactMiniNumber(1000000000000000000000000)).toBe('1.0s');
    expect(compactMiniNumber(1000000000000000000000000000)).toBe('1.0O');
    expect(compactMiniNumber(1000000000000000000000000000000)).toBe('1.0N');
    expect(compactMiniNumber(1000000000000000000000000000000000)).toBe('1.0D');
  });
  it('Don\'t compact numbers less than 1000.', () => {
    expect(compactMiniNumber(420)).toBe('420');
    expect(compactMiniNumber(69)).toBe('69');
  });
  it('Compacting numbers over 1D don\'t compact.', () => {
    expect(compactMiniNumber(1000000000000000000000000000000000000)).toMatch(/1e\+\d{2,3}/);
  });
});
