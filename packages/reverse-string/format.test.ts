import { format } from "./format";

describe('format(string, ...args)', () => {
  it('Formats a string.', () => {
    expect(format('Hello $1', 'World')).toBe('Hello World');
    expect(format('Hello $1, $2 and $3!', 'World', 'again', 'AGAIN')).toBe('Hello World, again and AGAIN!');
  });
  it('Discards extra arguments.', () => {
    expect(format('Hello $1', 'World', 'blah', 'lah', 'zah')).toBe('Hello World');
    expect(format('Hello $1, $2 and $3!', 'World', 'again', 'AGAIN', 'blah', 'lah', 'zah')).toBe('Hello World, again and AGAIN!');
  });
  it('Converts other types to string.', () => {
    expect(format('$1, $2, $3, $4, $5, $6, $7', 'Dave', 5, null, undefined, {}, [2, 3, 6], function () { })).toBe('Dave, 5, null, undefined, [object Object], 2,3,6, function () { }');
  });
  it('Multiple placeholders of same index, and in other order.', () => {
    expect(format('$4, $3 $3, $1 $2', 'First', 'Second', 'Third', 'Fourth')).toBe('Fourth, Third Third, First Second');
  });
});
