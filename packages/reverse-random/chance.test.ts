import { chance } from './chance';

describe('chance(percent)', () => {
  it('Providing a non-number throws error', () => {
    expect(() => {
      chance('100' as any);
    }).toThrowError('Provided percent must be a number.');
  });
  it('Chance returns boolean.', () => {
    expect(typeof chance(50)).toBe('boolean');
  });
  it('100% never returns false.', () => {
    const array = [];

    for(let i = 0; i < 1000; i++) {
      array.push(chance(100));
    }

    expect(array).not.toContain(false);
  });
  it('0% never returns true.', () => {
    const array = [];

    for(let i = 0; i < 1000; i++) {
      array.push(chance(0));
    }

    expect(array).not.toContain(true);
  });
});
