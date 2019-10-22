/**
 * Checks if a given date is the same date as today.
 */
export function dateEqualsNow(month: number, date: number, year: number) {
  if(typeof month !== 'number' || typeof date !== 'number' || typeof year !== 'number') {
    throw new TypeError('Passed date values must be a number.');
  }

  const now = new Date();

  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();
  const nowYear = now.getFullYear();

  return nowMonth === month && nowDate === date && nowYear === year;
}
