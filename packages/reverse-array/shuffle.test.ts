import { shuffle } from './shuffle';

describe('shuffle(array)', () => {
  it('Providing a non-array throws error.', () => {
    expect(() => {
      shuffle(0 as any);
    }).toThrowError('Array to modify must be an array.');
  });
  it('Shuffling an array returns an array that is different from the original.', () => {  
    const array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

    expect(shuffle(array)).not.toEqual(array);
  });
  it('Shuffling an array with the same values return the same array.', () => {
    const array = [1, 1, 1];

    expect(shuffle(array)).toEqual(array);
  });
});
