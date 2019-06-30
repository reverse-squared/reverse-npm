/**
 * A nicely formatted date with time in AM and PM.
 * @param {Date} date A date to format.
 * @returns {String} The formatted date.
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  let hour = date.getHours();
  let minute = date.getMinutes();
  const suffix = hour >= 12 ? 'pm' : 'am';
  hour %= 12;
  // the hour '0' should be '12'
  hour = hour ? hour : 12;
  minute = minute < 10 ? '0' + minute : minute;

  return `${year}-${month}-${day} at ${hour}:${minute}${suffix}`;
}

module.exports = formatDate;
