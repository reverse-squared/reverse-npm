import { encode, decode } from './encoder';

describe('encode(value)', () => {
  const message = 'Super secret message';

  it('Inputting a non-string throws error.', () => {
    expect(() => {
      encode(1 as any);
    }).toThrowError('Value must be a string.');
  });
  it('Outputted code is six characters.', () => {
    expect(encode(message)!.length).toBe(6);
  });
  it('Decode decodes the encoded message correctly.', () => {
    const code = encode(message);

    expect(decode(code) === message).toBe(true);
  });
});
