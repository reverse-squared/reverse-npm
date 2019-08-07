import { createArray } from "./createArary";

describe('createArray(length, mapper)', () => {
  it('Zero length array (does not call mapper)', () => {
    const cb = jest.fn();

    const array = createArray(0, cb);

    expect(Array.isArray(array)).toBe(true);
    expect(array.length).toEqual(0);
    expect(cb).not.toBeCalled()
  });
  it('Creates the right length array with right contents', () => {
    const cb = jest.fn((i) => i * i);

    const array = createArray(10, cb);

    expect(Array.isArray(array)).toBe(true);
    expect(array.length).toEqual(10);
    expect(cb).toBeCalledTimes(10);

    for (let i = 0; i < 10; i++) {
      expect(array[i]).toBe(i * i);
    }
  });
  it('Various Lengths', () => {
    const array = createArray(100, () => null);
    expect(Array.isArray(array)).toBe(true);
    expect(array.length).toEqual(100);

    const array2 = createArray(43, () => null);
    expect(typeof array2 === 'object').toBe(true);
    expect(array2.length).toEqual(43);
  });
  it('Invalid Arguments', () => {
    expect(() => {
      createArray(-50, () => null);
    }).toThrowError('Invalid array length');
    expect(() => {
      createArray(50, null as any);
    }).toThrowError('"map" is not a function');
  });
});
