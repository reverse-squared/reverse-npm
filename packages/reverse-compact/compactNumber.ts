/* eslint-disable no-inline-comments */
import commaNumber from 'comma-number';
import compactNumberMap from './mapLengthToLetter';

function scientificToDecimal(num: number | string): string {
  if(/\d+\.?\d*e[\+\-]*\d+/i.test(String(num))) {
    const zero = '0';
    const parts = String(num).toLowerCase().split('e');
    const e = Number(parts.pop());
    let l = Math.abs(Number(e));
    const sign = e / l;
    const coefficient_array = parts[0].split('.');

    if(sign === -1) {
      coefficient_array[0] = Math.abs(Number(coefficient_array[0])).toString();
      num = '-' + zero + '.' + new Array(l).join(zero) + coefficient_array.join('');
    }
    else {
      var dec = coefficient_array[1];
      if(dec) l = l - dec.length;
      num = coefficient_array.join('') + new Array(l+1).join(zero);
    }
  }

  return num.toString();
};

/**
 * Compacts a number using an letter.
 */
export function compactNumber(num: number, zeroDecimal: boolean) {
  if(typeof num !== 'number') {
    throw new TypeError('The number provided must be a number.');
  }

  if(num >= 1000000000000000000000000000000000000) {
    return num.toString();
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
    Math.floor((scientificToDecimal(num).length - 1) / 3) * 3 + 1
  ];

  return scientificToDecimal(num).replace(/\B(?=(\d{3})+(?!\d))/g, '.').substring(0, 4).replace(/\.$/, '') + letter;
}
