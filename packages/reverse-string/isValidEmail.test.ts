import { isValidEmail } from './isValidEmail';

describe('isValidEmail(email)', () => {
  it('Passing a non-string throws error.', () => {
    expect(() => {
      isValidEmail(420 as any);
    }).toThrowError('Email must be typeof string.');
  });
  it('Returned value is a boolean.', () => {
    expect(typeof isValidEmail('example@email.com')).toBe('boolean');
  });
  it('Checking emails works.', () => {
    expect(isValidEmail('someone@hotmale.com')).toBe(true);
    expect(isValidEmail('someone.another@geemail.com')).toBe(true);
    expect(isValidEmail('someone.69@geemail.com')).toBe(true);
    expect(isValidEmail('h@whoUsesYahoo.co')).toBe(true);

    expect(isValidEmail('someone')).toBe(false);
    expect(isValidEmail('someone.com')).toBe(false);
    expect(isValidEmail('someone@something.c')).toBe(false);
  });
});
