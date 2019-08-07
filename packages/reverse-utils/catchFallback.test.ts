import { catchFallback, catchFallbackAsync } from './catchFallback';

describe('catchFallback(callback, fallback)', () => {
  function willThrow() {
    throw new Error('Fake Error');
  }
  function willReturn12() {
    return 12;
  }
  it('Returns the function return value', () => {
    expect(catchFallback(willReturn12, 8)).toBe(12);
  });
  it('Returns fallback if throws', () => {
    expect(catchFallback(willThrow, 8)).toBe(8);
  });
});

describe('catchFallbackAsync(callback, fallback)', () => {
  async function willThrowAsync() {
    throw new Error('Fake Error');
  }
  async function willReturn12Async() {
    return 12;
  }
  it('Returns the function return value', () => {
    expect(catchFallbackAsync(willReturn12Async, 8)).resolves.toBe(12);
  });
  it('Returns fallback if throws', () => {
    expect(catchFallbackAsync(willThrowAsync, 8)).resolves.toBe(8);
  });
});
