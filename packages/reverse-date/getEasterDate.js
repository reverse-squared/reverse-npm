/**
 * Pads a single digit number with a leading zero.
 * @param {String|Number} number The number to pad.
 * @returns {String} A padded two digit number with a zero.
 */
function padout(number) {
  return number < 10 ? '0' + number : number;
}

/**
 * Finds the month and date of easter of that year.
 * @param {Number} year The year.
 * @returns {String} The month and day of easter in a "MM.DD" format.
 */
function getEasterDate(year) {
  const C = Math.floor(year / 100);
  const N = year - 19 * Math.floor(year / 19);
  const K = Math.floor((C - 17) / 25);
  let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
  I -= 30 * Math.floor(I / 30);
  I -= Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
  let J = year + Math.floor(year / 4) + I + 2 - C + Math.floor(C / 4);
  J -= 7 * Math.floor(J / 7);
  const L = I - J;
  const M = 3 + Math.floor((L + 40) / 44);
  const D = L + 28 - 31 * Math.floor(M / 4);

  return padout(M) + '.' + padout(D);
}

module.exports = getEasterDate;
