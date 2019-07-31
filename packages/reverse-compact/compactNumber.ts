/* eslint-disable no-inline-comments */
import * as commaNumber from 'comma-number';
import compactNumberMap from './mapLengthToLetter';

/**
 * Compacts a number using an letter.
 */
export function compactNumber(num: number, zeroDecimal: boolean) {
  if(typeof num !== 'number') {
    return 'NaN';
  }

  if(Math.floor(num) < 10000000) {
    const comma = commaNumber(Math.round(num * 10) / 10);
    if(comma.includes('.')) {
      return comma;
    }
    if (zeroDecimal) {
      return comma + '.0';
    }
    return comma;
  }

  const letter = compactNumberMap[
    Math.floor((Math.round(num).toString().length - 1) / 3) * 3 + 1
  ];

  return commaNumber(num, '.').substring(0, 4).replace(/\.$/, '') + letter;
}
