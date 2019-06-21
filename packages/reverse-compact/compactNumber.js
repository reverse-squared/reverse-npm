var commaNumber = require('comma-number');

let compactNumberMap = {
  4: 'K', // 1,000 -> 1K (only in compactMini)
  7: 'M', // 1,000,000 -> 1M
  10: 'B', // 1,000,000,000 -> 1B
  13: 'T', // 1,000,000,000,000 -> 1T
  16: 'Q', // 1,000,000,000,000,000 -> 1Q
  19: 'q', // 1,000,000,000,000,000,000 -> 1q
  22: 'S', // 1,000,000,000,000,000,000,000 -> 1S
  25: 's', // 1,000,000,000,000,000,000,000,000 -> 1s
  28: 'O', // 1,000,000,000,000,000,000,000,000,000 -> 1O
  31: 'N', // 1,000,000,000,000,000,000,000,000,000,000 -> 1N
  34: 'D', // 1,000,000,000,000,000,000,000,000,000,000,000 -> 1D
};

/**
 * Compacts a number using an letter.
 * @param {Number} num The number to compact.
 * @param {Boolean} zeroDecimal Whether or not to include a `.0` at the end of a number.
 * @returns {String} A compacted number with a trailing letter.
 */
function compactNumber(num, zeroDecimal) {
  if(typeof num !== 'number') {
    return 'NaN';
  }

  if(Math.floor(num) < 10000000) {
    const comma = commaNumber(Math.round(num * 10) / 10);
    if(comma.includes('.')) {
      return comma;
    } else {
      if (zeroDecimal) {
        return comma + '.0';
      } else {
        return comma;
      }
    }
  }

  let letter = compactNumberMap[
    Math.floor((Math.round(num).toString().length - 1) / 3) * 3 + 1
  ];

  return commaNumber(num, '.').substring(0, 4).replace(/\.$/, '') + letter;
}

module.exports = compactNumber;
