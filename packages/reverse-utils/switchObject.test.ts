import { switchObject } from './switchObject';

describe('switchObject(key, object)', () => {
  const obj = {
    first: 4,
    second: 6,
    third: 2,
    default: 8,
  };
  const obj2 = {
    first: 4,
    second: 6,
    third: 2,
  };
  it('Returns correct paramater', () => {
    expect(switchObject('first', obj)).toBe(obj.first);
    expect(switchObject('second', obj)).toBe(obj.second);
    expect(switchObject('third', obj)).toBe(obj.third);
  });
  it('Default Property', () => {
    expect(switchObject('default', obj)).toBe(obj.default);
    expect(switchObject('fourth', obj)).toBe(obj.default);
  });
  it('No Default Property, defaults to undefined', () => {
    expect(switchObject('fourth', obj2)).toBe(undefined);
    expect(switchObject('default', obj2)).toBe(undefined);
  });
});
