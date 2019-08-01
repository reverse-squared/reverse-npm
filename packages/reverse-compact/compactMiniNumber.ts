/* eslint-disable no-inline-comments */
import commaNumber from 'comma-number';
import compactNumberMap from './mapLengthToLetter';

/**
 * Compacts a number, with support for the K (1,000) unit.
 */
export function compactMiniNumber(num: number) {
  if(typeof num !== 'number') {
    return 'NaN';
  }

  if(Math.floor(num) < 1000) {
    return Math.floor(num).toString();
  }

  const letter = compactNumberMap[
    Math.floor((Math.round(num).toString().length - 1) / 3) * 3 + 1
  ];

  return commaNumber(num, '.').substring(0, 3).replace(/\.$/, '') + letter;
}
