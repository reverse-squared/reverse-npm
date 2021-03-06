/**
 * A nicely formatted date with time in AM and PM.
 */
export function formatDate(date: Date) {
  if(!(date instanceof Date)) {
    throw new TypeError('Passed date must be typeof Date.');
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  let hour = date.getHours();
  let minute = date.getMinutes();
  const suffix = hour >= 12 ? 'pm' : 'am';
  hour %= 12;
  // the hour '0' should be '12'
  hour = hour ? hour : 12;
  const minuteString = minute < 10 ? '0' + minute : minute;

  return `${year}-${month}-${day} at ${hour}:${minuteString}${suffix}`;
}
