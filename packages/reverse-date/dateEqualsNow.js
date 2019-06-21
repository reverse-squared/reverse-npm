/**
 * Checks if a given date is the same date as today.
 * @param {Number} month The month in a number. Leading zero optional.
 * @param {Number} date The date.
 * @param {Number} year The full year.
 * @returns {Boolean} Whether or not the provided day is the same day as today.
 */
function dateEqualsNow(month, date, year) {
  const now = new Date();
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();
  const nowYear = now.getFullYear();

  return nowMonth === month && nowDate === date && nowYear === year;
}

module.exports = dateEqualsNow;
