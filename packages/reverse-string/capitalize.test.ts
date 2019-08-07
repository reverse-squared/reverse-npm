import { capitalize } from './capitalize';

describe('capitalize(string)', () => {
  it('Works on regular strings', () => {
    expect(capitalize('banana')).toBe('Banana');
    expect(capitalize('apple')).toBe('Apple');
  });
  it('Works on single letter strings', () => {
    expect(capitalize('h')).toBe('H');
    expect(capitalize('b')).toBe('B');
  });
  it('Works on empty strings', () => {
    expect(capitalize('')).toBe('');
  });
});
